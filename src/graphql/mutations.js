/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
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
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
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
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
