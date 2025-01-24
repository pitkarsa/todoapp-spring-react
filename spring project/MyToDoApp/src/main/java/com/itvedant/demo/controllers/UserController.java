package com.itvedant.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itvedant.demo.models.LoginDto;
import com.itvedant.demo.models.User;
import com.itvedant.demo.projections.UserProjection;
import com.itvedant.demo.services.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user){
		User newUser= userService.addUser(user);
		return new ResponseEntity<>(newUser,HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody LoginDto loginDto){
		UserProjection user = userService.userLogin(loginDto);
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
	
	
}
