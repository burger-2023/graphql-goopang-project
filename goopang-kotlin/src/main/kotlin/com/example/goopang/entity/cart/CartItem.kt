package com.example.goopang.entity.cart

import com.example.goopang.entity.product.Product

data class CartItem(
    val id: String,
    val quantity: Int,
    val product: Product,
    val cart: Cart
) {
}