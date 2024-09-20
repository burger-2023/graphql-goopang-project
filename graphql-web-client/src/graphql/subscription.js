import { gql } from '@apollo/client';

export const NEW_PRODUCT_SUBSCRIPTION = gql`
  subscription newProduct($productName: String) {
    newProduct(productName: $productName) {
      id
      name
      price
      productType
      ... on Electronics {
        warrantyPeriod
      }
      ... on Clothing {
        size
      }
    }
  }
`;
