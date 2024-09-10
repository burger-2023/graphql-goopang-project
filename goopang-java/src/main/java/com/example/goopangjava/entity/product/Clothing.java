package com.example.goopangjava.entity.product;

public class Clothing implements Product {
    private final String id;
    private final String name;
    private final double price;
    private final String size;
    private final ProductType productType = ProductType.CLOTHING;

    public Clothing(String id, String name, double price, String size) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.size = size;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        return price;
    }

    public String getSize() {
        return size;
    }

    @Override
    public ProductType getProductType() {
        return productType;
    }
}