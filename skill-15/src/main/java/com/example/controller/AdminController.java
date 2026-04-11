package com.example.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @PostMapping("/add")
    public String add() {
        return "Admin: Resource added successfully!";
    }

    @DeleteMapping("/delete")
    public String delete() {
        return "Admin: Resource deleted successfully!";
    }
}
