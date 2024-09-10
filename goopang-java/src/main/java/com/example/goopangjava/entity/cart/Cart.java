package com.example.goopangjava.entity.cart;

import com.example.goopangjava.entity.user.User;

import java.util.ArrayList;
import java.util.List;

public class Cart {
    private final String id;
    private final User user;
    private double totalAmount = 0.0;
    private List<CartItem> items = List.of();

    public Cart(String id, User user) {
        this.id = id;
        this.user = user;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items;
    }
}
