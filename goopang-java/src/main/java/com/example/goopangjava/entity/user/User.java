package com.example.goopangjava.entity.user;

import com.example.goopangjava.entity.SearchResult;
import com.example.goopangjava.entity.cart.Cart;

import java.time.OffsetDateTime;

public class User implements SearchResult {
    private final String id;
    private final String name;
    private final String email;
    private final OffsetDateTime createdAt;
    private Cart cart;

    public User(String id, String name, String email, OffsetDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
        this.cart = null; // 초기값은 null로 설정
    }

    // Getters and setters
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

    public void setCart(Cart cart) {
        this.cart = cart;
    }
}
