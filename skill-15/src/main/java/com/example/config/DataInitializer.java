package com.example.config;

import com.example.model.*;
import com.example.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner initDatabase(UserRepository repository, PasswordEncoder encoder) {
        return args -> {
            if (repository.findByUsername("admin").isEmpty()) {
                repository.save(new User(null, "admin", encoder.encode("admin123"), Role.ADMIN));
            }
            if (repository.findByUsername("employee").isEmpty()) {
                repository.save(new User(null, "employee", encoder.encode("emp123"), Role.EMPLOYEE));
            }
        };
    }
}
