package com.example.goopang.entity.product

import com.example.goopang.entity.SearchResult

interface Product: SearchResult {
    val id: String
    val name: String
    val price: Double
    val productType: ProductType
}