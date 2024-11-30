package com.cubicalseeker.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cubicalseeker.dto.ProfileDTO;
import com.cubicalseeker.entity.Profile;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.repository.ProfileRepository;
import com.cubicalseeker.utility.Utilities;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileRepository profileRepository;
	
	@Autowired
	private Utilities utilities;
	
	@Override
	public Long createProfile(String email, String name) throws JobportalException {
		Profile profile = new Profile();
		profile.setId(utilities.getNextSequence("profiles"));
		profile.setName(name);
		profile.setEmail(email);
		profile.setSkills(new ArrayList<>());
		profile.setExperiences(new ArrayList<>());
		profile.setCertifications(new ArrayList<>());
		profileRepository.save(profile);
		return profile.getId();
	}

	@Override
	public ProfileDTO getProfile(Long id) throws JobportalException {
		return profileRepository.findById(id).orElseThrow(()-> new JobportalException("PROFILE_NOT_EXISTS")).toDTO();
	}

	@Override
	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobportalException {
		Profile profileToUpdate = profileRepository.findById(profileDTO.getId()).orElseThrow(()-> 
		new JobportalException("PROFILE_NOT_EXISTS"));
		profileToUpdate.setId(profileDTO.getId());
		profileToUpdate.setJobTitle(profileDTO.getJobTitle());
		profileToUpdate.setCompany(profileDTO.getCompany());
		profileToUpdate.setLocation(profileDTO.getLocation());
		profileToUpdate.setAbout(profileDTO.getAbout());
		profileToUpdate.setSkills(profileDTO.getSkills());
		profileToUpdate.setExperiences(profileDTO.getExperiences());
		profileToUpdate.setCertifications(profileDTO.getCertifications());
		profileToUpdate.setTotalExp(profileDTO.getTotalExp());
		ProfileDTO updatedProfile = profileRepository.save(profileToUpdate).toDTO();
		return updatedProfile;
	}

	@Override
	public List<ProfileDTO> getAllProfiles() {
		return profileRepository.findAll().stream().map((x)->x.toDTO()).toList();
	}
}
