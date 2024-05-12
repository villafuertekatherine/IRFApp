package com.pupr.IRF.controller;

import com.pupr.IRF.model.UsersModel;
import com.pupr.IRF.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    private final UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UsersModel usersModel) {
        try {
            UsersModel registeredUser = usersService.registerUser(usersModel.getUsername(), usersModel.getPassword(), usersModel.getEmail());
            return ResponseEntity.ok(registeredUser); // Return the registered user details
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred during registration.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsersModel usersModel) {
        try {
            UsersModel authenticated = usersService.authenticate(usersModel.getUsername(), usersModel.getPassword());
            if (authenticated != null) {
                return ResponseEntity.ok(authenticated); // Return authenticated user details
            } else {
                return ResponseEntity.status(401).body("Authentication failed");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred during login.");
        }
    }
}
