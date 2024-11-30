package com.cubicalseeker.repository;

import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cubicalseeker.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
		public Optional<User> findByEmail(String email);
		
}
