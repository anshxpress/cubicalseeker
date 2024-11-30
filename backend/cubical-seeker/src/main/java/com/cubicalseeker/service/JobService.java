package com.cubicalseeker.service;

import java.util.List;

import com.cubicalseeker.dto.ApplicantDTO;
import com.cubicalseeker.dto.Application;
import com.cubicalseeker.dto.JobDTO;
import com.cubicalseeker.exception.JobportalException;


public interface JobService {

	public JobDTO postJob(JobDTO jobDTO) throws JobportalException;

	public List<JobDTO> getAllJobs();

	public JobDTO getJobs(Long id) throws JobportalException;

	public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobportalException;

	public List<JobDTO> getJobPostedBy(Long id);

	public void changeAppStatus(Application application) throws JobportalException;
	
}
