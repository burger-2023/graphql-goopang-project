package com.example.goopangjava.input;

public class AddUserInput {
    private final String name;
    private final String email;

    public AddUserInput(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}