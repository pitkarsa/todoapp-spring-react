package com.itvedant.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.itvedant.demo.models.LoginDto;
import com.itvedant.demo.models.User;
import com.itvedant.demo.projections.UserProjection;
import com.itvedant.demo.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User addUser(User user) {
		return userRepository.save(user);
	}
	
	public UserProjection userLogin(LoginDto dto) {
		UserProjection currentUser = userRepository.findByUsernameAndPassword(dto.getUsername(),dto.getPassword())
				           .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid Credentials"));
		
		
		return currentUser;
	}
}
