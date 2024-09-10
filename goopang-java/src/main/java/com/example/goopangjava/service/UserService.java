package com.example.goopangjava.service;

import com.example.goopangjava.entity.user.User;
import com.example.goopangjava.input.AddUserInput;
import com.example.goopangjava.repository.Database;
import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private final CartService cartService;

    public UserService(CartService cartService) {
        this.cartService = cartService;
    }

    public List<User> getUsers() {
        return Database.getInstance().users;
    }

    public User getUser(String userId) throws BadRequestException {
        return Database.getInstance().users.stream()
                .filter(user -> user.getId().equals(userId))
                .findFirst()
                .map(user -> {
                    try {
                        user.setCart(cartService.getUserCart(userId));
                        return user;
                    } catch (BadRequestException e) {
                        throw new RuntimeException(e);
                    }
                })
                .orElseThrow(() -> new BadRequestException("User not found"));
    }

    public User addUser(AddUserInput addUserInput) {
        User user = new User(
                UUID.randomUUID().toString().substring(0, 5),
                addUserInput.getName(),
                addUserInput.getEmail(),
                OffsetDateTime.now()
        );
        Database.getInstance().users.add(user);
        user.setCart(cartService.addUserCart(user));
        return user;
    }
}