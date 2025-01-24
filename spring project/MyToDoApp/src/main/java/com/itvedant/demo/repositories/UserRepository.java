package com.itvedant.demo.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.itvedant.demo.models.User;
import com.itvedant.demo.projections.UserProjection;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(excerptProjection = UserProjection.class)
public interface UserRepository extends CrudRepository<User, Integer> {

	public Optional<UserProjection> findByUsernameAndPassword(String username, String password);
}
