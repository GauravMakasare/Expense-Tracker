package com.expense.tracker.ExpenseTracker.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name = "category")

public class Category {

	@Id
	private Long id;

	private String name;// category of the expense

	@ManyToOne(cascade = CascadeType.PERSIST)
	private User user;

}
