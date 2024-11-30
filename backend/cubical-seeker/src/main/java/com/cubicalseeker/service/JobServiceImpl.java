package com.cubicalseeker.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cubicalseeker.dto.ApplicantDTO;
import com.cubicalseeker.dto.ApplicantionStatus;
import com.cubicalseeker.dto.Application;
import com.cubicalseeker.dto.JobDTO;
import com.cubicalseeker.dto.JobStatus;
import com.cubicalseeker.entity.Applicant;
import com.cubicalseeker.entity.Job;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.repository.JobRepository;
import com.cubicalseeker.utility.Utilities;

@Service("jobService")
public class JobServiceImpl implements JobService{
	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private Utilities utilities;
	

	@Override
	public JobDTO postJob(JobDTO jobDTO) throws JobportalException {
		if(jobDTO.getId()==0) {
			jobDTO.setId(utilities.getNextSequence("jobs"));
			jobDTO.setPostTime(LocalDateTime.now());
		}
		else {
			Job job = jobRepository.findById(jobDTO.getId()).orElseThrow(()-> new JobportalException("JOB_NOT_FOUND_WHILE_POSTING"));
			if(job.getJobStatus().equals(JobStatus.DRAFT)||jobDTO.getJobStatus().equals(JobStatus.CLOSED))jobDTO.setPostTime(LocalDateTime.now());
		}
		Job job = jobRepository.save(jobDTO.toEntity());
		return job.toDTO();
	}

	@Override
	public List<JobDTO> getAllJobs() {
		return jobRepository.findAll().stream().map((x)->x.toDTO()).toList();	
		}

	@Override
	public JobDTO getJobs(Long id) throws JobportalException {
		return jobRepository.findById(id).orElseThrow(()-> new JobportalException("JOB_NOT_FOUND")).toDTO();
}

	@Override
	public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobportalException {
		Job job= jobRepository.findById(id).orElseThrow(()-> new JobportalException("JOB_NOT_FOUND"));
		List<Applicant>applicants=job.getApplicants();	
		if(applicants==null)applicants=new ArrayList<>();
		if(applicants.stream().filter((x)->x.getApplicantId()==applicantDTO.getApplicantId()).toList().size()>0) throw new JobportalException("JOB_APLLIED_ALREADY");
		applicantDTO.setApplicationStatus(ApplicantionStatus.APPLIED);
		applicants.add(applicantDTO.toEntity());
		job.setApplicants(applicants);
		jobRepository.save(job);
	}

	@Override
	public List<JobDTO> getJobPostedBy(Long id) {
		return jobRepository.findByPostedBy(id).stream().map((x)->x.toDTO()).toList();	
		
	}

	@Override
	public void changeAppStatus(Application application) throws JobportalException {
		Job job= jobRepository.findById(application.getId()).orElseThrow(()-> new JobportalException("JOB_NOT_FOUND"));
		List<Applicant>applicants=job.getApplicants().stream().map((x)->{
			if(application.getApplicantId()==x.getApplicantId()) {
				x.setApplicationStatus(application.getApplicationStatus());
				if(application.getApplicationStatus().equals(ApplicantionStatus.INTERVIEWING))x.setInterview(application.getInterviewTime());
			}
				return x;
		}).toList();
		job.setApplicants(applicants);
		jobRepository.save(job);
		
	}
}
