/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform {
    onCreatePlatform {
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
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
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
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
