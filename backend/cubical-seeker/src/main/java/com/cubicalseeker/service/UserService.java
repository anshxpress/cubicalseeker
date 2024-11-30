package com.cubicalseeker.service;


import com.cubicalseeker.dto.LoginDTO;
import com.cubicalseeker.dto.ResponseDTO;
import com.cubicalseeker.dto.UserDTO;
import com.cubicalseeker.exception.JobportalException;

import jakarta.validation.Valid;

public interface UserService {
	public UserDTO registerUser(UserDTO userDTO) throws JobportalException;

	public UserDTO loginUser(LoginDTO loginDTO) throws  Exception;

	Boolean sendOtp(String email) throws Exception;

	Boolean verifyOtp(String email, String otp) throws JobportalException;

    ResponseDTO changePassword(LoginDTO loginDTO) throws JobportalException;

}
