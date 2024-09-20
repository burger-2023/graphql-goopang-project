import { gql } from '@apollo/client';

// User 관련 필드를 재사용할 수 있도록 Fragment로 정의
export const USER_FRAGMENT = gql`
  fragment UserFields on User {
    id
    name
  }
`;

// Electronics 관련 필드를 재사용할 수 있도록 Fragment로 정의
export const ELECTRONICS_FRAGMENT = gql`
  fragment ElectronicsFields on Electronics {
    id
    name
    price
    productType
    warrantyPeriod @include(if: $includeDetails)
  }
`;

// Clothing 관련 필드를 재사용할 수 있도록 Fragment로 정의
export const CLOTHING_FRAGMENT = gql`
  fragment ClothingsFields on Clothing {
    id
    name
    price
    productType
    size @include(if: $includeDetails)
  }
`;


// Home
export const GET_USER_AND_PRODUCTS = gql`
  query getUserAndProducts($userId: ID!, $includeDetails: Boolean! = false) {
    getProducts {
      ... on Electronics {
        ...ElectronicsFields
      }
      ... on Clothing {
        ...ClothingsFields
      }
    }
    getUser(userId: $userId) {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
  ${ELECTRONICS_FRAGMENT}
  ${CLOTHING_FRAGMENT}
`;

// Cart, MyPage, UserDetail
export const GET_USER = gql`
  query getUser(
    $userId: ID!, 
    $includeUserDetail: Boolean = true, 
    $includeCart: Boolean! = false, 
    $includeItems: Boolean! = false
  ) {
    getUser(userId: $userId) {
      ...UserFields
      email @include(if: $includeUserDetail) 
      createdAt @include(if: $includeUserDetail) 

      cart @include(if: $includeCart) {
        totalAmount
        items @include(if: $includeItems) {
            id
            product {
                name
                price
                productType
            }
            quantity
        }
      }
    }
  }
  ${USER_FRAGMENT}
`;

// ProductCategory
export const GET_PRODUCTS = gql`
  query getProducts($includeDetails: Boolean!) {
    getProducts {
      ... on Electronics {
        ...ElectronicsFields
      }
      ... on Clothing {
        ...ClothingsFields
      }
    }
  }
  ${ELECTRONICS_FRAGMENT}
  ${CLOTHING_FRAGMENT}
`;

// Search
export const SEARCH = gql`
  query search($keyword: String! $includeDetails: Boolean!) {
    search(keyword: $keyword) {
      ... on User {
        ...UserFields
        createdAt
      }
      ... on Electronics {
        ...ElectronicsFields
      }
      ... on Clothing {
        ...ClothingsFields
      }
    }
  }
  ${USER_FRAGMENT}
  ${ELECTRONICS_FRAGMENT}
  ${CLOTHING_FRAGMENT}
`;
