package com.cubicalseeker.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cubicalseeker.dto.ProfileDTO;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.service.ProfileService;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/profiles")
public class ProfileAPI {
	@Autowired
	private ProfileService profileService;

	@GetMapping("/get/{id}")
	public ResponseEntity<ProfileDTO> getProfile(@PathVariable Long id) throws JobportalException {
		return new ResponseEntity<>(profileService.getProfile(id), HttpStatus.OK);
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<ProfileDTO>> getAllProfiles() throws JobportalException {
		return new ResponseEntity<>(profileService.getAllProfiles(), HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<ProfileDTO> updateProfile(@PathVariable Long id, @RequestBody ProfileDTO profileDTO)
			throws JobportalException {
		profileDTO.setId(id);
		return new ResponseEntity<>(profileService.updateProfile(profileDTO), HttpStatus.OK);
	}
}