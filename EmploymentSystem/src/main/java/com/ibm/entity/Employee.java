package com.ibm.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "employee")
public class Employee {
	@Id
	private String id;
	@Field(name = "firstname")
	private String firstName;
	@Field(name = "middlename")
	private String middleName;
	@Field(name = "lastname")
	private String lastName;
	@Field(name = "birthdate")
	private String birthDate;
	private String position;
	@Field(name = "compesationlist")
	private List<Compensation> compesationList;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public List<Compensation> getCompesationList() {
		return compesationList;
	}

	public void setCompesationList(List<Compensation> compesationList) {
		this.compesationList = compesationList;
	}

}
