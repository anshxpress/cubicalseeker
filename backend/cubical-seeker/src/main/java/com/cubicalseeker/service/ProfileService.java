package com.cubicalseeker.service;

import java.util.List;

import com.cubicalseeker.dto.ProfileDTO;
import com.cubicalseeker.exception.JobportalException;

public interface ProfileService {
	public Long createProfile(String email, String name) throws JobportalException;
	public ProfileDTO getProfile(Long id) throws JobportalException;
	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobportalException;
	public List<ProfileDTO> getAllProfiles();
}
