package com.cubicalseeker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cubicalseeker.dto.LoginDTO;
import com.cubicalseeker.dto.ResponseDTO;
import com.cubicalseeker.dto.UserDTO;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.service.UserService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;

@RestController
@Validated
@RequestMapping("/user")
public class UserAPI {
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<UserDTO>registerUser(@RequestBody @Valid UserDTO userDTO) throws JobportalException{
		userDTO = userService.registerUser(userDTO);
				return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
	}
	@PostMapping("/login")
	public ResponseEntity<UserDTO> loginUser(@RequestBody @Valid LoginDTO loginDTO) throws Exception {
	    return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
	}
	@PostMapping("/changePass")
	public ResponseEntity<ResponseDTO> changePassword(@RequestBody @Valid LoginDTO loginDTO) throws Exception {
	    userService.changePassword(loginDTO);
	    return new ResponseEntity<>(new ResponseDTO("Password changed successfully."), HttpStatus.OK);
	}
	@PostMapping("/sendOtp/{email}")
	public ResponseEntity<ResponseDTO>sendOtp(@PathVariable @Email(message = "{user.email.invalid}") String email) throws Exception{
		userService.sendOtp(email);
		return new ResponseEntity<>(new ResponseDTO("OTP sent successfully."), HttpStatus.OK);
	}
	@GetMapping("/verifyOtp/{email}/{otp}")
	public ResponseEntity<ResponseDTO>verifyOtp(@PathVariable @Email(message = "{user.email.invalid}") String email, @PathVariable @Pattern (regexp="^[0-9]{6}$", message="{otp.invalid}") String otp) throws JobportalException{
		userService.verifyOtp(email, otp);
		return new ResponseEntity<>(new ResponseDTO("OTP verified successfully."), HttpStatus.OK);
	}
	
} 
