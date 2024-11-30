package com.cubicalseeker.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cubicalseeker.dto.NotificationStatus;
import com.cubicalseeker.entity.Notification;

public interface NotificationRepo extends MongoRepository<Notification, Long> {
	public List <Notification> findByUserIdAndStatus (long userId, NotificationStatus status);
}
