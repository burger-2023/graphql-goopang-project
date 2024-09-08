package com.example.goopang.resolver

import com.example.goopang.entity.product.Product
import com.example.goopang.input.AddProductInput
import com.example.goopang.service.ProductService
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.graphql.data.method.annotation.SubscriptionMapping
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux

@Controller
class ProductResolver(
    private val productService: ProductService
) {

    @QueryMapping
    fun getProducts(): ArrayList<Product> {
        return productService.getProducts()
    }

    @MutationMapping
    fun addProduct(
        @Argument addProductInput: AddProductInput
    ): Product {
        return productService.addProduct(addProductInput)
    }

    @SubscriptionMapping
    fun newProduct(
        @Argument productName: String?
    ): Flux<Product> {
        return productService.messageFlux(productName)
    }
}