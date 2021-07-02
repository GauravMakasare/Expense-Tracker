package com.expensetracker.expense.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracker.expense.model.Category;
import com.expensetracker.expense.repository.CategoryRepository;

@RestController
@RequestMapping("/api")
public class CategoryController {

	private CategoryRepository categoryRepository;

	public CategoryController(CategoryRepository categoryRepository) {
		super();
		this.categoryRepository = categoryRepository;
	}

	@GetMapping("/categories")
	Collection<Category> categories() {
		return categoryRepository.findAll();
	}

	@GetMapping("/category/{id}")
	ResponseEntity<?> getCategory(@PathVariable Long id) {
		Optional<Category> category = categoryRepository.findById(id);
		return category.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@PostMapping("/category")
	ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) throws URISyntaxException {
		Category result = categoryRepository.save(category);
		return ResponseEntity.created(new URI("/api/category" + result.getId())).body(result);

	}

	@PutMapping("/category/{id}") // if we want to overwrite any data we will use this type of mapping
	ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category) {
		Category result = categoryRepository.save(category);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/category/{id}")
	ResponseEntity<?> deleteCategory (@PathVariable Long id){
		categoryRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
