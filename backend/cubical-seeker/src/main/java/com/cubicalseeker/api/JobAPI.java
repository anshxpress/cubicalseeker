package com.cubicalseeker.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cubicalseeker.dto.ApplicantDTO;
import com.cubicalseeker.dto.Application;
import com.cubicalseeker.dto.JobDTO;
import com.cubicalseeker.dto.ResponseDTO;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.service.JobService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {
	@Autowired
	private JobService jobService;

	@PostMapping("/post")
	public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws JobportalException {
		return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<JobDTO>> getAllJobs() throws JobportalException {
		return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<JobDTO> getJobs(@PathVariable Long id) throws JobportalException {
		return new ResponseEntity<>(jobService.getJobs(id), HttpStatus.OK);
	}

	@PostMapping("/apply/{id}")
	public ResponseEntity<ResponseDTO> applyJob(@PathVariable Long id, @RequestBody ApplicantDTO applicantDTO)
			throws JobportalException {
		jobService.applyJob(id, applicantDTO);
		return new ResponseEntity<>(new ResponseDTO("Applied Successfully"), HttpStatus.OK);
	}
	@GetMapping("/PostedBy/{id}")
	public ResponseEntity<List<JobDTO>> getJobPostedby(@PathVariable Long id) throws JobportalException {
		return new ResponseEntity<>(jobService.getJobPostedBy(id), HttpStatus.OK);
	}
	@PostMapping("/changeAppStatus")
	public ResponseEntity<ResponseDTO> applyJobchangeApplStatus(@RequestBody Application application)
			throws JobportalException {
		jobService.changeAppStatus(application);
		return new ResponseEntity<>(new ResponseDTO("Application Status Changed Successfully"), HttpStatus.OK);
	}
}