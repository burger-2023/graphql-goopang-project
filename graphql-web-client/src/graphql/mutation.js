import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($addUserInput: AddUserInput!) {
    addUser(addUserInput: $addUserInput) {
      id
      name
      email
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($addProductInput: AddProductInput!) {
    addProduct(addProductInput: $addProductInput) {
      id
      name
      price
      productType
    }
  }
`;

export const ADD_CART_ITEM = gql`
  mutation addCartItem($addCartItemInput: AddCartItemInput!) {
    addCartItem(addCartItemInput: $addCartItemInput) {
      id
      items {
        id
        product {
          name
          price
        }
        quantity
      }
      totalAmount
    }
  }
`;

export const DELETE_CART_ITEM = gql`
  mutation deleteCartItem($deleteCartItemInput: DeleteCartItemInput!) {
    deleteCartItem(deleteCartItemInput: $deleteCartItemInput) {
      id
      items {
        id
        product {
          name
          price
        }
        quantity
      }
      totalAmount
    }
  }
`;
