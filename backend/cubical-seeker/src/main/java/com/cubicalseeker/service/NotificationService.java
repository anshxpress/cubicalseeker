package com.cubicalseeker.service;

import java.util.List;

import com.cubicalseeker.dto.NotificationDTO;
import com.cubicalseeker.entity.Notification;
import com.cubicalseeker.exception.JobportalException;

public interface NotificationService {
	public void sendNotification(NotificationDTO notificationDTO);
	public List<Notification> getUnreadNotification(Long userId);
	public void readNotification(Long id) throws JobportalException;
}
