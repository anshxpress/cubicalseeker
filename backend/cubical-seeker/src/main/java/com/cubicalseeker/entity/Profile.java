package com.cubicalseeker.entity;

import java.util.Base64;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.cubicalseeker.dto.Certification;
import com.cubicalseeker.dto.Experience;
import com.cubicalseeker.dto.ProfileDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "profiles")
public class Profile {
	@Id
	private Long id;
	private String name;
	private String email;
	private String JobTitle;
	private String company;
	private String location;
	private String about;
	private byte[] picture;
	private Long totalExp;
	private List<String>skills;
	private List<Experience>experiences;
	private List<Certification>certifications;
	private List<Long>savedJobs;
	
	public ProfileDTO toDTO() {
		return new ProfileDTO(this.id, this.name, this.email, this.JobTitle, this.company, this.location, this.about, this.picture!=null?Base64.getEncoder().encodeToString(this.picture):null, this.totalExp , this.skills, this.experiences, this.certifications, this.savedJobs);
			 
	}
}
