package com.example.goopangjava.entity.cart;

import com.example.goopangjava.entity.product.Product;

public class CartItem {

    private final String id;
    private final int quantity;
    private final Product product;
    private final Cart cart;

    // Constructor
    public CartItem(String id, int quantity, Product product, Cart cart) {
        this.id = id;
        this.quantity = quantity;
        this.product = product;
        this.cart = cart;
    }

    // Getters
    public String getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }

    public Product getProduct() {
        return product;
    }

    public Cart getCart() {
        return cart;
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "id='" + id + '\'' +
                ", quantity=" + quantity +
                ", product=" + product +
                ", cart=" + cart +
                '}';
    }
}