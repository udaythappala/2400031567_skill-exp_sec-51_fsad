package com.klef.controller;

import com.klef.model.Student;
import com.klef.exception.*;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable String id) {

        int studentId;

        try {
            studentId = Integer.parseInt(id);
        } catch (NumberFormatException e) {
            throw new InvalidInputException("ID must be a number");
        }

        if (studentId != 1) {
            throw new StudentNotFoundException("Student not found with ID " + studentId);
        }

        return new Student(1, "Hari", "CSE");
    }
}