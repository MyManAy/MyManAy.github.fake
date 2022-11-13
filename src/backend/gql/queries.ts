import { gql } from "@apollo/client";

export const getUserIdByName = () => gql`
  query getUserIdByName($name: string) {
    User(where: { name: { _eq: "$name" } }) {
      id
    }
  }
`;

export const getMoneyByUserId = (id: number) => gql`
  query getMoneyByUserId {
    Money(where: { userId: { _eq: "${id}" } }) {
      amount
    }
  }
`;
