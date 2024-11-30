package com.cubicalseeker.api;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cubicalseeker.dto.ResponseDTO;
import com.cubicalseeker.entity.Notification;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.service.NotificationService;

@RestController
@Validated
@RequestMapping("/notifications")
@CrossOrigin
public class NotificationAPI {
	@Autowired
	private NotificationService notificatioService;
	
	@GetMapping("/get/{userId}")
	public ResponseEntity<List<Notification>> getNotifications(@PathVariable Long userId) {
	    return new ResponseEntity<>(notificatioService.getUnreadNotification(userId), HttpStatus.OK);
	}
	@PutMapping("/read/{id}")
	public ResponseEntity<ResponseDTO> readNotifications(@PathVariable Long id) throws JobportalException {
		notificatioService.readNotification(id);
	    return new ResponseEntity<>(new ResponseDTO("Success"), HttpStatus.OK);
	}
}
