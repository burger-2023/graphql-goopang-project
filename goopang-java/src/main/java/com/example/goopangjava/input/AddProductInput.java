package com.example.goopangjava.input;

import com.example.goopangjava.entity.product.ProductType;

public class AddProductInput {
    private final String name;
    private final double price;
    private final ProductType productType;
    private final String warrantyPeriod; // Nullable
    private final String size; // Nullable

    public AddProductInput(String name, double price, ProductType productType, String warrantyPeriod, String size) {
        this.name = name;
        this.price = price;
        this.productType = productType;
        this.warrantyPeriod = warrantyPeriod;
        this.size = size;
    }

    // Getters
    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public ProductType getProductType() {
        return productType;
    }

    public String getWarrantyPeriod() {
        return warrantyPeriod;
    }

    public String getSize() {
        return size;
    }
}
