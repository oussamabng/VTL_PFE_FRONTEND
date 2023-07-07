import { gql } from "@apollo/client";

export const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      access_token
      refresh_token
    }
  }
`;

export const LOGIN_ADMIN = gql`
  mutation LoginAdmin($input: LoginAdmin!) {
    loginAdmin(input: $input) {
      access_token
      refresh_token
    }
  }
`;
