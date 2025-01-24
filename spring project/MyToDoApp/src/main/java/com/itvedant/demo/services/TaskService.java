package com.itvedant.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itvedant.demo.models.Task;
import com.itvedant.demo.repositories.TaskRepository;

@Service
public class TaskService {
	@Autowired
	private TaskRepository taskRepository;
	
	public Task addTask(Task task) {
		return taskRepository.save(task);
	}
	
	
}
