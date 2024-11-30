package com.cubicalseeker.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cubicalseeker.entity.OTP;
import com.cubicalseeker.entity.User;
import com.cubicalseeker.exception.JobportalException;
import com.cubicalseeker.repository.OTPRepository;
import com.cubicalseeker.repository.UserRepository;
import com.cubicalseeker.utility.Data;
import com.cubicalseeker.utility.Utilities;

import jakarta.mail.internet.MimeMessage;

import com.cubicalseeker.dto.LoginDTO;
import com.cubicalseeker.dto.NotificationDTO;
import com.cubicalseeker.dto.ResponseDTO;
import com.cubicalseeker.dto.UserDTO;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;
    
    @Autowired
    private ProfileService profileservice;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired NotificationService notificationService;

    // Inject Utilities using @Autowired
    @Autowired
    private Utilities utilities;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobportalException {
        Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
        if (optional.isPresent()) throw new JobportalException("USER_EXISTS");
        userDTO.setProfileId(profileservice.createProfile(userDTO.getEmail(), userDTO.getName()));

        // Call getNextSequence on the injected Utilities instance
        userDTO.setId(utilities.getNextSequence("users"));  // No static reference

        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();
    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws Exception {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new JobportalException("USER_NOT_FOUND"));
        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new JobportalException("INVALID_CREDENTIALS");
        }
        return user.toDTO();
    }

    @Override
    public Boolean sendOtp(String email) throws Exception {
      User user =   userRepository.findByEmail(email).orElseThrow(() -> new JobportalException("USER_NOT_FOUND"));
        MimeMessage mm = mailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mm,true);
        message.setTo(email);
        message.setSubject("Your OTP code: ");

        // You can still call generateOTP statically since it's a static method
        String genOtp = Utilities.generateOTP();  // Static method call is fine

        OTP otp = new OTP(email, genOtp, LocalDateTime.now());
        otpRepository.save(otp);
        message.setText(Data.getMessageBody(genOtp, user.getName()), true);
        mailSender.send(mm);
        return true;
    }

	@Override
	public Boolean verifyOtp(String email, String otp) throws JobportalException {
		OTP otpEntity = otpRepository.findById(email).orElseThrow(()-> new JobportalException("OTP_NOT_FOUND"));
			if(!otpEntity.getOtpCode().equals(otp)) throw new JobportalException("OTP_INCORRECT");
			return true;
	}

	@Override
	public ResponseDTO changePassword(LoginDTO loginDTO) throws JobportalException {
		User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new JobportalException("USER_NOT_FOUND"));
		user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
		userRepository.save(user);
		NotificationDTO noti = new NotificationDTO();
		noti.setUserId(user.getId());
		noti.setMessage("Password Reset Successfull");
		noti.setAction("Password");
		notificationService.sendNotification(noti);
		return new ResponseDTO("Password changed Successfully");
	}
	
	@Scheduled(fixedRate = 60000)
	public void removeExpiredOTPs() {
		LocalDateTime expiry = LocalDateTime.now().minusMinutes(5);
		List<OTP>expiredOTPs = otpRepository.findByCreationTimeBefore(expiry);
		if(!expiredOTPs.isEmpty()) {
			otpRepository.deleteAll(expiredOTPs);
			System.out.println("Removed " + expiredOTPs.size()+" expired OTPs.");
		}
		
	}
}
