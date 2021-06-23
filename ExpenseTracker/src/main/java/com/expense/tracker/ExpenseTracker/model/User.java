package com.expense.tracker.ExpenseTracker.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * to make JPA understand this is a database class
 * @Data is used to automatically generate getters and setters for the annotated class 
 * makes the code look more cleaner and avoids errors
 * */
@AllArgsConstructor //creates a constructor with all the arguments
@NoArgsConstructor //creates an empty constructor just so that JPA doesnt give any errors
@Entity
@Data
@Table(name = "user")
public class User {
	
	@Id //Specifies the primary key of an entity
	private Long id;

	private String name;

	private String email;
	
	@OneToMany //mapping(one user many categories) also used set to make sure there are no duplicate values 
	private Set<Category> category;
	

}
