package com.ibm.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.entity.Compesation;
import com.ibm.entity.Employee;
import com.ibm.service.EmploymentService;

@RestController
@RequestMapping("/apis")
public class EmploymentController {

	@Autowired
	EmploymentService employeeService;


	@PostMapping("/createemployee")
	public HashMap<String, Object> createEmployee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
	
	@PostMapping("/updateemployee")
	public HashMap<String, Object> updateEmployee(@RequestBody Employee employee) {
		return employeeService.updateEmployee(employee);
	}
	
	@PostMapping("/updateemployeecompesation")
	public HashMap<String, Object> updateEmployeeCompesation(@RequestBody Employee employee) {
		return employeeService.updateEmployeeCompesation(employee);
	}
	
	@GetMapping("/getemployee/{id}")
	public Employee getEmployeeById(@PathVariable String id) {
		return employeeService.getEmployeeById(id);
	}
	
	@GetMapping("/getallemployees")
	public List<Employee> getAllEmployees() {
		return employeeService.getAllEmployees();
	}
	
	@GetMapping("/searchemployees")
	public List<Employee> getEmployeesByFields(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String position) {
		return employeeService.getEmployeesByFields(firstName, lastName, position);
	}
	
	
	@PostMapping("/check-if-exists")
	public String checkIfExists(@RequestBody Employee employee) {
		if(employeeService.getByAllFields(employee).size() > 0) {
			return "Yes";
		}
		return "No";
	}
	
	@GetMapping("/compesationbydate")
	public List<Compesation> getCompesationByDate(@RequestParam String id, @RequestParam int month, @RequestParam int year) {
		return employeeService.getCompesationByMonthAndYear(id, month, year);
	}
	
	@GetMapping("/compesationbyrange")
	public List<Compesation> getCompensationByRange(@RequestParam String id, @RequestParam int startMonth, @RequestParam int startYear, @RequestParam int endMonth, @RequestParam int endYear) {
		return employeeService.getCompesationByRange(id, startMonth, startYear, endMonth, endYear);
	}

}
