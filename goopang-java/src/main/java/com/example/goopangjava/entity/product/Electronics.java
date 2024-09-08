package com.example.goopangjava.entity.product;

public class Electronics implements Product {

    private final String id;
    private final String name;
    private final double price;
    private final String warrantyPeriod;
    private final ProductType productType;

    // Constructor
    public Electronics(String id, String name, double price, String warrantyPeriod) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.warrantyPeriod = warrantyPeriod;
        this.productType = ProductType.ELECTRONICS;
    }

    // Getters
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

    public String getWarrantyPeriod() {
        return warrantyPeriod;
    }

    @Override
    public ProductType getProductType() {
        return productType;
    }

    @Override
    public String toString() {
        return "Electronics{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", warrantyPeriod='" + warrantyPeriod + '\'' +
                ", productType=" + productType +
                '}';
    }
}