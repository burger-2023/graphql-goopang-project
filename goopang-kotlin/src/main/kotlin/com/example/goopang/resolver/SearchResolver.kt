package com.example.goopang.resolver

import com.example.goopang.entity.SearchResult
import com.example.goopang.service.ProductService
import com.example.goopang.service.UserService
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class SearchResolver(
    private val productService: ProductService,
    private val userService: UserService
) {

    @QueryMapping
    fun search(
        @Argument keyword: String
    ): List<SearchResult> {
        return productService.getProducts().filter { it.name.contains(keyword) } +
                userService.getUsers().filter { it.name.contains(keyword) }
    }
}