package com.cubicalseeker.dto;


import com.cubicalseeker.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
	   
	   private Long id;
	   @NotBlank(message="{user.name.absent}")
	   
	   private String name;
	   @NotBlank(message="{user.email.absent}")
	   @Email(message="{user.name.invalid}")
	   
	   private String email;
	   @NotBlank(message="{user.password.absent}")
	   @Pattern(regexp="^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\\[\\]:;<>,.?~\\-\\/\\\\])(?=.*\\d)[A-Za-z\\d!@#$%^&*()_+{}\\[\\]:;<>,.?~\\-\\/\\\\]{8,15}$", message="{user.password.invalid}")
	   
	   private String password;
	   private AccountType accountType;
	   private Long profileId;
	   
	   public User toEntity() {
		   return new User(this.id, this.name, this.email, this.password, this.accountType, this.profileId);
	   }

}
