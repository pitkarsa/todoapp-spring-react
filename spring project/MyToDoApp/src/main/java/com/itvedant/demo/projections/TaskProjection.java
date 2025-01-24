package com.itvedant.demo.projections;

import java.time.LocalDate;

import org.springframework.data.rest.core.config.Projection;

import com.itvedant.demo.models.Task;
import com.itvedant.demo.models.User;

@Projection(types = Task.class)
public interface TaskProjection {
	String getStatus();	
	int getId() ;	
	String getTitle();
	LocalDate getDueDate();	
	String getDescription();		
	public User getUserId();	
	LocalDate getStartDate();
	LocalDate getEndDate();
	

}
