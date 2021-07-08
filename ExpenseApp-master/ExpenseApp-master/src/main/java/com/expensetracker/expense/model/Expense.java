package com.expensetracker.expense.model;

import java.time.Instant;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "expense")
public class Expense {

	@Id
	private Long id;

	private Instant expensedate;

	private String description;

	private String location;

	@ManyToOne
	private Category category;

	@JsonIgnore //we do not want to add this information to the response
	@ManyToOne
	private User user;

	public Long getId() {
		return id;
	}

	public Instant getExpensedate() {
		return expensedate;
	}

	public String getDescription() {
		return description;
	}

	public String getLocation() {
		return location;
	}

	public Category getCategory() {
		return category;
	}

	public User getUser() {
		return user;
	}

}
