package com.example.goopangjava.resolver;

import com.example.goopangjava.entity.SearchResult;
import com.example.goopangjava.service.ProductService;
import com.example.goopangjava.service.UserService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@Controller
public class SearchResolver {
    private final ProductService productService;
    private final UserService userService;

    public SearchResolver(ProductService productService, UserService userService) {
        this.productService = productService;
        this.userService = userService;
    }

    @QueryMapping
    public List<SearchResult> search(@Argument String keyword) {
        List<SearchResult> results = new ArrayList<>();
        results.addAll(productService.getProducts().stream()
            .filter(product -> product.getName().contains(keyword))
            .toList());
        results.addAll(userService.getUsers().stream()
            .filter(user -> user.getName().contains(keyword))
            .toList());
        return results;
    }
}