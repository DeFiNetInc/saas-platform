/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      platforms {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      name
      userID
      user {
        id
        firstName
        lastName
        email
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      posts {
        items {
          id
          platformID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userID
        user {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      platformID
      platform {
        id
        name
        userID
        user {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        platformID
        platform {
          id
          name
          userID
          createdAt
          updatedAt
        }
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
