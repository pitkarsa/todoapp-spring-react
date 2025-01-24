package com.itvedant.demo.models;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title, description;	
	private boolean is_completed;
	
	private LocalDate startDate, dueDate, endDate ;
	
	@CreatedDate
	private LocalDate createdAt;
	@LastModifiedDate
	private LocalDate modifiedAt;
	
	private String status="assigned";
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User userId;
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public LocalDate getDueDate() {
		return dueDate;
	}
	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isIs_completed() {
		return is_completed;
	}
	public void setIs_completed(boolean is_completed) {
		this.is_completed = is_completed;
	}
	
	public User getUserId() {
		return userId;
	}
	public void setUserId(User userId) {
		this.userId = userId;
	}
	public LocalDate getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDate getModifiedAt() {
		return modifiedAt;
	}
	public void setModifiedAt(LocalDate modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	public LocalDate getStartDate() {
		return startDate;
	}
	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}
	public LocalDate getEndDate() {
		return endDate;
	}
	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
	@Override
	public String toString() {
		return "Task [id=" + id + ", title=" + title + ", description=" + description + ", is_completed=" + is_completed
				+ ", startDate=" + startDate + ", dueDate=" + dueDate + ", endDate=" + endDate + ", createdAt="
				+ createdAt + ", modifiedAt=" + modifiedAt + ", status=" + status + ", userId=" + userId + "]";
	}
	
	
}
