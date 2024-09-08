package com.example.goopang.resolver

import com.example.goopang.entity.cart.Cart
import com.example.goopang.input.AddCartItemInput
import com.example.goopang.input.DeleteCartItemInput
import com.example.goopang.service.CartService
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class CartResolver(
    private val cartService: CartService
) {

    @QueryMapping
    fun getUserCart(
        @Argument userId: String
    ): Cart {
        return cartService.getUserCart(userId)
    }

    @MutationMapping
    fun addCartItem(
        @Argument addCartItemInput: AddCartItemInput
    ): Cart {
        return cartService.addCartItem(addCartItemInput)
    }

    @MutationMapping
    fun deleteCartItem(
        @Argument deleteCartItemInput: DeleteCartItemInput
    ): Cart {
        return cartService.deleteCartItem(deleteCartItemInput)
    }
}