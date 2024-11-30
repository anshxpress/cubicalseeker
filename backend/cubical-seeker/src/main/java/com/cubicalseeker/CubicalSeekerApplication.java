package com.cubicalseeker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableMongoAuditing
@EnableScheduling
public class CubicalSeekerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CubicalSeekerApplication.class, args);
	}

}
