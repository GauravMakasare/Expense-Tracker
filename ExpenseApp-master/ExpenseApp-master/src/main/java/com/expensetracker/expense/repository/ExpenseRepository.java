package com.expensetracker.expense.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expensetracker.expense.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense,Long> {

}
