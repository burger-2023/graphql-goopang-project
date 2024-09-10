
package com.example.goopangjava.entity.product;


import com.example.goopangjava.entity.SearchResult;

public interface Product extends SearchResult {
    String getId();
    String getName();
    double getPrice();
    ProductType getProductType();
}
