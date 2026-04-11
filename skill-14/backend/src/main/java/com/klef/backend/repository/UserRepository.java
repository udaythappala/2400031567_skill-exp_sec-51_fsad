package com.klef.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klef.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}