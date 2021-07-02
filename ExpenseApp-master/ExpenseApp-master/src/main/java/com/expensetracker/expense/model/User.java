package com.expensetracker.expense.model;

import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor // creates a no argument constructer
@AllArgsConstructor
@Entity
@Data // creates setters and getters automatically using this annotation
@Table(name = "user")
public class User {

	@Id // primary key
	private String id;

	private String name;

	private String email;

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

}
