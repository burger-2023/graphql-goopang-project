package com.example.goopang.input

import com.example.goopang.entity.product.ProductType

class AddProductInput(
    val name: String,
    val price: Double,
    val productType: ProductType,

    val warrantyPeriod: String?,
    val size: String?
) {
}