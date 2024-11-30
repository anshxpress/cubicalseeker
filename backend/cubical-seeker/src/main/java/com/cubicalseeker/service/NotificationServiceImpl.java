package com.cubicalseeker.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cubicalseeker.dto.NotificationDTO;
import com.cubicalseeker.dto.NotificationStatus;
import com.cubicalseeker.dto.ResponseDTO;
import com.cubicalseeker.entity.Notification;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.repository.NotificationRepo;
import com.cubicalseeker.utility.Utilities;

@Service("notificationService")
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepo notificationRepo;

    @Autowired
    private Utilities utilities; // Inject the Utilities class

    @Override
    public void sendNotification(NotificationDTO notificationDTO) {
        try {
            // Use the injected Utilities instance
            Long notificationId = utilities.getNextSequence("notification");
            notificationDTO.setId(notificationId);
            notificationDTO.setTimestamp(LocalDateTime.now());
            notificationDTO.setStatus(NotificationStatus.UNREAD);

            // Ensure NotificationDTO.toEntity() works correctly
            notificationRepo.save(notificationDTO.toEntity());
        } catch (Exception e) {
            throw new RuntimeException("Failed to send notification: " + e.getMessage(), e);
        }
    }

    @Override
    public List<Notification> getUnreadNotification(Long userId) {
        // Ensure this method is properly defined in NotificationRepo
        return notificationRepo.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
    }

	@Override
	public void readNotification(Long id) throws JobportalException {
		Notification noti = notificationRepo.findById(id).orElseThrow(()-> new JobportalException("No Notification found"));
		noti.setStatus(NotificationStatus.READ);
		notificationRepo.save(noti);
	}
}
