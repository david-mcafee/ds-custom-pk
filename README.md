# Custom PK Testing

## Environments:

- `dev` is in `east-1`, and `integ` is in `west-2`

## Test cases

### CLI / Codegen

#### amplify-category-api

- `yarn && yarn setup-dev`
- Within sample app:
  - Set feature flag in `samples/react/datastore/v2/custom-pk/amplify/cli.json`:
    - `"usefieldnameforprimarykeyconnectionfield": true,`
  - `amplify-dev init`, `amplify-dev add api`, etc

#### amplify-codegen

- `nvm use 15.14.0`
- `rm -rf yarn.lock node_modules && yarn clean && yarn && yarn setup-dev`
- Within sample app, `amplify-dev codegen models`

### State tests:

- Online
- Offline
- After DS clear
  - Create a record
  - Clear/reload to cause a re-sync
  - Delete record
- Subscription messages from other clients (online/offline)
- Check AppSync to verify that there are no orphaned records

### Operations to test:

1. Query
2. Query by PK
3. Query by PK Predicate
4. Query by PK + SK Predicate
5. Query by PK + Multi SK Predicate
6. Query by PK OL
7. Query by PK + SK OL
8. Query by ALL
9. Create
10. Update
11. Update PK: should throw TS error, as PK is immutable
12. Delete
13. Delete by PK
14. Delete by Pk Predicate
15. Delete by PK OL
16. Delete by PK + SK Predicate
17. Delete by PK + Multi SK Predicate
18. Delete by PK + SK OL
19. Observe
20. ObserveQuery
21. ObserveQuery with Predicate

### TODO:

- Relational mappings with PK only (no SK)
- Check AppSync for orphaned records
- @belongsTo fields ['postId', 'postTitle']
- Relational observeQuery
- Create w/ relational record instance, not just PK
- Additional permutations of schema types (i.e. https://docs.amplify.aws/lib/datastore/relational/q/platform/js/#updated-schema)

## Schema:

```graphql
# This "input" configures a global authorization rule to enable public access to
# all models in this schema. Learn more about authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
input AMPLIFY {
  globalAuthRule: AuthRule = { allow: public }
} # FOR TESTING ONLY!
# Custom PK
type Todo @model {
  customId: ID! @primaryKey
  name: String!
  description: String
}

# Custom PK + SK
type Todo2 @model {
  customId: ID! @primaryKey(sortKeyFields: ["createdAt"])
  name: String!
  description: String
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime
}

# Custom PK + SK w/ name + query field
type Todo3 @model {
  id: ID!
  customId: ID!
    @index(
      name: "byCustomIdAndCreated"
      sortKeyFields: ["createdAt"]
      queryField: "todoByCustomIdAndCreatedAt"
    )
  name: String!
  description: String
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime
}

# Model w/out CPK
type Todo4 @model {
  id: ID!
  name: String!
  description: String
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}

# Model w/out explicit id
type Todo5 @model {
  name: String!
  description: String
}

# id as PK + SK
type Todo6 @model {
  id: ID! @primaryKey(sortKeyFields: ["name"])
  name: String!
  description: String
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime
}

type Todo7 @model {
  id: ID! @primaryKey(sortKeyFields: ["name", "createdAt"])
  name: String!
  description: String
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime
}

# 1.2 Has one - unidirectional
type Project11 @model {
  customProjectId: ID! @primaryKey(sortKeyFields: ["name"])
  name: String!
  description: String!
  team: Team11 @hasOne
}

type Team11 @model {
  customTeamId: ID! @primaryKey(sortKeyFields: ["name"])
  name: String!
  description: String!
}

# 1.2 Has one - bidirectional
type Project12 @model {
  customProjectId: ID! @primaryKey(sortKeyFields: ["name"])
  name: String!
  description: String!
  team: Team12 @hasOne
}

type Team12 @model {
  customTeamId: ID! @primaryKey(sortKeyFields: ["name"])
  name: String!
  description: String!
  project: Project12 @belongsTo
}

# 2.1 hasMany - unidirectional
type Post21 @model {
  customPostId: ID! @primaryKey(sortKeyFields: ["title"])
  title: String!
  content: String!
  comments: [Comment21] @hasMany
}

type Comment21 @model {
  customCommentId: ID! @primaryKey(sortKeyFields: ["content"])
  content: String!
}

# 2.2 hasMany - bidirectional
type Post22 @model {
  customPostId: ID! @primaryKey(sortKeyFields: ["title"])
  title: String!
  content: String!
  comments: [Comment22] @hasMany
}

type Comment22 @model {
  customCommentId: ID! @primaryKey(sortKeyFields: ["content"])
  content: String!
  post: Post22 @belongsTo
}

# Original:
# 3.1 manyToMany
type Post31 @model {
  customPostId: ID!
  title: String!
  content: String
  tags: [Tag31] @manyToMany(relationName: "PostTags31")
}

type Tag31 @model {
  customTagId: ID! @primaryKey(sortKeyFields: ["label"])
  label: String!
  posts: [Post31] @manyToMany(relationName: "PostTags31")
}
```
