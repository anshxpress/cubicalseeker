package com.cubicalseeker.entity;

import java.time.LocalDateTime;
import java.util.Base64;

import com.cubicalseeker.dto.ApplicantDTO;
import com.cubicalseeker.dto.ApplicantionStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Applicant {
	private Long applicantId;
	private String name;
	private String email;
	private Long phone;
	private String website;
	private byte[] resume;
	private String coverLetter;
	private LocalDateTime timestamp;
	private ApplicantionStatus applicationStatus;
	private LocalDateTime interview;
	
	public ApplicantDTO toDTO() {
		return new ApplicantDTO(this.applicantId, this.name, this.email, this.phone, this.website, this.resume!=null?Base64.getEncoder().encodeToString(this.resume):null, this.coverLetter,this.timestamp, this.applicationStatus, this.interview);
	}
}
