package com.example.goopangjava.entity.cart;

import com.example.goopangjava.entity.user.User;

import java.util.ArrayList;
import java.util.List;

public class Cart {

    private final String id;
    private User user;
    private double totalAmount;
    private List<CartItem> items;

    // Constructor
    public Cart(String id, User user) {
        this.id = id;
        this.user = user;
        this.items = new ArrayList<>();
        this.totalAmount = 0.0;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items != null ? items : new ArrayList<>();
        this.totalAmount = calculateTotalAmount();
    }

    // Helper method to calculate totalAmount
    private double calculateTotalAmount() {
        return items.stream()
                .mapToDouble(item -> item.getProduct().getPrice() * item.getQuantity())
                .sum();
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id='" + id + '\'' +
                ", user=" + user +
                ", totalAmount=" + totalAmount +
                ", items=" + items +
                '}';
    }
}