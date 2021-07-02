package com.expensetracker.expense.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Data
@Setter
@Getter
@Table(name = "category")
public class Category {
	@Id
	private Long id;
	@NonNull
	private String name;

	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}

	public String getName() {
		return name;
	}

}
