package com.cubicalseeker.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cubicalseeker.entity.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, Long> {

}
