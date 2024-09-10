package com.example.goopangjava.input;

public class DeleteCartItemInput {
    private final String cartItemId;
    private final String userId;

    public DeleteCartItemInput(String cartItemId, String userId) {
        this.cartItemId = cartItemId;
        this.userId = userId;
    }

    // Getters
    public String getCartItemId() {
        return cartItemId;
    }

    public String getUserId() {
        return userId;
    }
}