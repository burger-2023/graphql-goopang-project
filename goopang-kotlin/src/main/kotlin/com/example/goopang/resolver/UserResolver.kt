package com.example.goopang.resolver

import com.example.goopang.entity.user.User
import com.example.goopang.input.AddUserInput
import com.example.goopang.service.UserService
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class UserResolver(
    private val userService: UserService
) {

    @QueryMapping
    fun getUser(
        @Argument userId: String
    ): User {
        return userService.getUser(userId)
    }

    @MutationMapping
    fun addUser(
        @Argument addUserInput: AddUserInput
    ): User {
        return userService.addUser(addUserInput)
    }
}