package com.itvedant.demo.projections;

import org.springframework.data.rest.core.config.Projection;

import com.itvedant.demo.models.User;

@Projection(types = User.class)
public interface UserProjection {
	int getId();
	String getUsername();
	String getEmail();
	String getRole();
}
