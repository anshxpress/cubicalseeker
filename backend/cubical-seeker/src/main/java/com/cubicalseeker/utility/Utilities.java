package com.cubicalseeker.utility;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.cubicalseeker.entity.Sequence;
import com.cubicalseeker.exception.JobportalException;

@Component
public class Utilities {

    @Autowired
    private MongoOperations mongoOperations;

    /**
     * Generates the next sequence ID for the given key using MongoDB.
     */
    public Long getNextSequence(String key) throws JobportalException {
        Query query = new Query(Criteria.where("_id").is(key));
        Update update = new Update().inc("seq", 1);
        FindAndModifyOptions options = new FindAndModifyOptions().returnNew(true).upsert(true);

        // Retrieve and update the sequence value
        Sequence seq = mongoOperations.findAndModify(query, update, options, Sequence.class);

        // Handle potential errors
        if (seq == null) {
            throw new JobportalException("Unable to get sequence id for key: " + key);
        }
        return seq.getSeq();
    }

    /**
     * Generates a random 6-digit OTP.
     */
    public static String generateOTP() {
        StringBuilder otp = new StringBuilder();
        SecureRandom random = new SecureRandom();
        for (int i = 0; i < 6; i++) otp.append(random.nextInt(10));
        return otp.toString();
    }
}
