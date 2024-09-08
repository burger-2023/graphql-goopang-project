package com.example.goopang.entity.user

import com.example.goopang.entity.SearchResult
import com.example.goopang.entity.cart.Cart
import java.time.OffsetDateTime

data class User(
    val id: String,
    val name: String,
    val email: String,
    val createdAt: OffsetDateTime
): SearchResult {
    var cart: Cart? = null
}
