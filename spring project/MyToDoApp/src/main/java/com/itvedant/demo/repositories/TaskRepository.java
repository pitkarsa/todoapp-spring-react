package com.itvedant.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.itvedant.demo.models.Task;
import com.itvedant.demo.projections.TaskProjection;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(excerptProjection = TaskProjection.class)
public interface TaskRepository extends CrudRepository<Task, Integer>{

}
