package com.example.goopangjava.entity.user;

import com.example.goopangjava.entity.cart.Cart;

import java.time.OffsetDateTime;

public class User {

    private final String id;
    private final String name;
    private final String email;
    private OffsetDateTime createdAt;
    private Cart cart;

    // Constructor
    public User(String id, String name, String email, OffsetDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
        this.cart = null;
    }

    // Getters
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public Cart getCart() {
        return cart;
    }

    // Setters for mutable fields
    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", createdAt=" + createdAt +
                ", cart=" + cart +
                '}';
    }
}