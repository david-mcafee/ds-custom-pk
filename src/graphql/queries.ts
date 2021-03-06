/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($customId: ID!) {
    getTodo(customId: $customId) {
      customId
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $customId: ID
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTodos(
      customId: $customId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo2 = /* GraphQL */ `
  query GetTodo2($customId: ID!, $createdAt: AWSDateTime!) {
    getTodo2(customId: $customId, createdAt: $createdAt) {
      customId
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodo2s = /* GraphQL */ `
  query ListTodo2s(
    $customId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelTodo2FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTodo2s(
      customId: $customId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodo2s = /* GraphQL */ `
  query SyncTodo2s(
    $filter: ModelTodo2FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodo2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo3 = /* GraphQL */ `
  query GetTodo3($id: ID!) {
    getTodo3(id: $id) {
      id
      customId
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodo3s = /* GraphQL */ `
  query ListTodo3s(
    $filter: ModelTodo3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodo3s = /* GraphQL */ `
  query SyncTodo3s(
    $filter: ModelTodo3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodo3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        customId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo4 = /* GraphQL */ `
  query GetTodo4($id: ID!) {
    getTodo4(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodo4s = /* GraphQL */ `
  query ListTodo4s(
    $filter: ModelTodo4FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo4s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodo4s = /* GraphQL */ `
  query SyncTodo4s(
    $filter: ModelTodo4FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodo4s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo5 = /* GraphQL */ `
  query GetTodo5($id: ID!) {
    getTodo5(id: $id) {
      name
      description
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodo5s = /* GraphQL */ `
  query ListTodo5s(
    $filter: ModelTodo5FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo5s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        description
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodo5s = /* GraphQL */ `
  query SyncTodo5s(
    $filter: ModelTodo5FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodo5s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        name
        description
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo6 = /* GraphQL */ `
  query GetTodo6($id: ID!, $name: String!) {
    getTodo6(id: $id, name: $name) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodo6s = /* GraphQL */ `
  query ListTodo6s(
    $id: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelTodo6FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTodo6s(
      id: $id
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodo6s = /* GraphQL */ `
  query SyncTodo6s(
    $filter: ModelTodo6FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodo6s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo7 = /* GraphQL */ `
  query GetTodo7($id: ID!, $name: String!, $createdAt: AWSDateTime!) {
    getTodo7(id: $id, name: $name, createdAt: $createdAt) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodo7s = /* GraphQL */ `
  query ListTodo7s(
    $id: ID
    $nameCreatedAt: ModelTodo7PrimaryCompositeKeyConditionInput
    $filter: ModelTodo7FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTodo7s(
      id: $id
      nameCreatedAt: $nameCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodo7s = /* GraphQL */ `
  query SyncTodo7s(
    $filter: ModelTodo7FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodo7s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProject11 = /* GraphQL */ `
  query GetProject11($customProjectId: ID!, $name: String!) {
    getProject11(customProjectId: $customProjectId, name: $name) {
      customProjectId
      name
      description
      team {
        customTeamId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      project11TeamId
      project11TeamName
    }
  }
`;
export const listProject11s = /* GraphQL */ `
  query ListProject11s(
    $customProjectId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelProject11FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProject11s(
      customProjectId: $customProjectId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customProjectId
        name
        description
        team {
          customTeamId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        project11TeamId
        project11TeamName
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProject11s = /* GraphQL */ `
  query SyncProject11s(
    $filter: ModelProject11FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProject11s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customProjectId
        name
        description
        team {
          customTeamId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        project11TeamId
        project11TeamName
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeam11 = /* GraphQL */ `
  query GetTeam11($customTeamId: ID!, $name: String!) {
    getTeam11(customTeamId: $customTeamId, name: $name) {
      customTeamId
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeam11s = /* GraphQL */ `
  query ListTeam11s(
    $customTeamId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelTeam11FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTeam11s(
      customTeamId: $customTeamId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customTeamId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeam11s = /* GraphQL */ `
  query SyncTeam11s(
    $filter: ModelTeam11FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeam11s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customTeamId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProject12 = /* GraphQL */ `
  query GetProject12($customProjectId: ID!, $name: String!) {
    getProject12(customProjectId: $customProjectId, name: $name) {
      customProjectId
      name
      description
      team {
        customTeamId
        name
        description
        project {
          customProjectId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          project12TeamId
          project12TeamName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        team12ProjectId
        team12ProjectName
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      project12TeamId
      project12TeamName
    }
  }
`;
export const listProject12s = /* GraphQL */ `
  query ListProject12s(
    $customProjectId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelProject12FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProject12s(
      customProjectId: $customProjectId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customProjectId
        name
        description
        team {
          customTeamId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          team12ProjectId
          team12ProjectName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        project12TeamId
        project12TeamName
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProject12s = /* GraphQL */ `
  query SyncProject12s(
    $filter: ModelProject12FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProject12s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customProjectId
        name
        description
        team {
          customTeamId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          team12ProjectId
          team12ProjectName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        project12TeamId
        project12TeamName
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeam12 = /* GraphQL */ `
  query GetTeam12($customTeamId: ID!, $name: String!) {
    getTeam12(customTeamId: $customTeamId, name: $name) {
      customTeamId
      name
      description
      project {
        customProjectId
        name
        description
        team {
          customTeamId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          team12ProjectId
          team12ProjectName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        project12TeamId
        project12TeamName
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      team12ProjectId
      team12ProjectName
    }
  }
`;
export const listTeam12s = /* GraphQL */ `
  query ListTeam12s(
    $customTeamId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelTeam12FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTeam12s(
      customTeamId: $customTeamId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customTeamId
        name
        description
        project {
          customProjectId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          project12TeamId
          project12TeamName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        team12ProjectId
        team12ProjectName
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeam12s = /* GraphQL */ `
  query SyncTeam12s(
    $filter: ModelTeam12FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeam12s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customTeamId
        name
        description
        project {
          customProjectId
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          project12TeamId
          project12TeamName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        team12ProjectId
        team12ProjectName
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost21 = /* GraphQL */ `
  query GetPost21($customPostId: ID!, $title: String!) {
    getPost21(customPostId: $customPostId, title: $title) {
      customPostId
      title
      content
      comments {
        items {
          customCommentId
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          post21CommentsId
          post21CommentsTitle
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPost21s = /* GraphQL */ `
  query ListPost21s(
    $customPostId: ID
    $title: ModelStringKeyConditionInput
    $filter: ModelPost21FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPost21s(
      customPostId: $customPostId
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customPostId
        title
        content
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPost21s = /* GraphQL */ `
  query SyncPost21s(
    $filter: ModelPost21FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPost21s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customPostId
        title
        content
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment21 = /* GraphQL */ `
  query GetComment21($customCommentId: ID!, $content: String!) {
    getComment21(customCommentId: $customCommentId, content: $content) {
      customCommentId
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      post21CommentsId
      post21CommentsTitle
    }
  }
`;
export const listComment21s = /* GraphQL */ `
  query ListComment21s(
    $customCommentId: ID
    $content: ModelStringKeyConditionInput
    $filter: ModelComment21FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComment21s(
      customCommentId: $customCommentId
      content: $content
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customCommentId
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        post21CommentsId
        post21CommentsTitle
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComment21s = /* GraphQL */ `
  query SyncComment21s(
    $filter: ModelComment21FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComment21s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customCommentId
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        post21CommentsId
        post21CommentsTitle
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost22 = /* GraphQL */ `
  query GetPost22($customPostId: ID!, $title: String!) {
    getPost22(customPostId: $customPostId, title: $title) {
      customPostId
      title
      comments {
        items {
          customCommentId
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          post22CommentsId
          post22CommentsTitle
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPost22s = /* GraphQL */ `
  query ListPost22s(
    $customPostId: ID
    $title: ModelStringKeyConditionInput
    $filter: ModelPost22FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPost22s(
      customPostId: $customPostId
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customPostId
        title
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPost22s = /* GraphQL */ `
  query SyncPost22s(
    $filter: ModelPost22FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPost22s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customPostId
        title
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment22 = /* GraphQL */ `
  query GetComment22($customCommentId: ID!, $content: String!) {
    getComment22(customCommentId: $customCommentId, content: $content) {
      customCommentId
      content
      post {
        customPostId
        title
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      post22CommentsId
      post22CommentsTitle
    }
  }
`;
export const listComment22s = /* GraphQL */ `
  query ListComment22s(
    $customCommentId: ID
    $content: ModelStringKeyConditionInput
    $filter: ModelComment22FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComment22s(
      customCommentId: $customCommentId
      content: $content
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customCommentId
        content
        post {
          customPostId
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        post22CommentsId
        post22CommentsTitle
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComment22s = /* GraphQL */ `
  query SyncComment22s(
    $filter: ModelComment22FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComment22s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customCommentId
        content
        post {
          customPostId
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        post22CommentsId
        post22CommentsTitle
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost31 = /* GraphQL */ `
  query GetPost31($id: ID!) {
    getPost31(id: $id) {
      customPostId
      title
      content
      tags {
        items {
          id
          post31ID
          tag31ID
          tag31label
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPost31s = /* GraphQL */ `
  query ListPost31s(
    $filter: ModelPost31FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPost31s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        customPostId
        title
        content
        tags {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPost31s = /* GraphQL */ `
  query SyncPost31s(
    $filter: ModelPost31FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPost31s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customPostId
        title
        content
        tags {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTag31 = /* GraphQL */ `
  query GetTag31($customTagId: ID!, $label: String!) {
    getTag31(customTagId: $customTagId, label: $label) {
      customTagId
      label
      posts {
        items {
          id
          post31ID
          tag31ID
          tag31label
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTag31s = /* GraphQL */ `
  query ListTag31s(
    $customTagId: ID
    $label: ModelStringKeyConditionInput
    $filter: ModelTag31FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTag31s(
      customTagId: $customTagId
      label: $label
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customTagId
        label
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTag31s = /* GraphQL */ `
  query SyncTag31s(
    $filter: ModelTag31FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTag31s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        customTagId
        label
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostTags31 = /* GraphQL */ `
  query GetPostTags31($id: ID!) {
    getPostTags31(id: $id) {
      id
      post31ID
      tag31ID
      tag31label
      post31 {
        customPostId
        title
        content
        tags {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tag31 {
        customTagId
        label
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPostTags31s = /* GraphQL */ `
  query ListPostTags31s(
    $filter: ModelPostTags31FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags31s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post31ID
        tag31ID
        tag31label
        post31 {
          customPostId
          title
          content
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        tag31 {
          customTagId
          label
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostTags31s = /* GraphQL */ `
  query SyncPostTags31s(
    $filter: ModelPostTags31FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostTags31s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        post31ID
        tag31ID
        tag31label
        post31 {
          customPostId
          title
          content
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        tag31 {
          customTagId
          label
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const todoByCustomIdAndCreatedAt = /* GraphQL */ `
  query TodoByCustomIdAndCreatedAt(
    $customId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodo3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    todoByCustomIdAndCreatedAt(
      customId: $customId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customId
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
