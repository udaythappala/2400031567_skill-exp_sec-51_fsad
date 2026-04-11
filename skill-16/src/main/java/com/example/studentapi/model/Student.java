package com.example.studentapi.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Student Entity Model")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique ID of the Student", example = "1")
    private Long id;

    @NotNull(message = "Name cannot be null")
    @Schema(description = "Name of the Student", example = "John Doe")
    private String name;

    @Email(message = "Invalid email format")
    @Schema(description = "Email of the Student", example = "john.doe@example.com")
    private String email;

    @NotEmpty(message = "Course cannot be empty")
    @Schema(description = "Course enrolled by the Student", example = "Computer Science")
    private String course;
}
