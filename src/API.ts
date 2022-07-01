/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  customId: string,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  customId: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  customId: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  customId: string,
};

export type CreateTodo2Input = {
  customId: string,
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTodo2ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo2ConditionInput | null > | null,
  or?: Array< ModelTodo2ConditionInput | null > | null,
  not?: ModelTodo2ConditionInput | null,
};

export type Todo2 = {
  __typename: "Todo2",
  customId: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateTodo2Input = {
  customId: string,
  name?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type DeleteTodo2Input = {
  customId: string,
  createdAt: string,
};

export type CreateTodo3Input = {
  id?: string | null,
  customId: string,
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTodo3ConditionInput = {
  customId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo3ConditionInput | null > | null,
  or?: Array< ModelTodo3ConditionInput | null > | null,
  not?: ModelTodo3ConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Todo3 = {
  __typename: "Todo3",
  id: string,
  customId: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateTodo3Input = {
  id: string,
  customId?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTodo3Input = {
  id: string,
};

export type CreateTodo4Input = {
  id?: string | null,
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTodo4ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo4ConditionInput | null > | null,
  or?: Array< ModelTodo4ConditionInput | null > | null,
  not?: ModelTodo4ConditionInput | null,
};

export type Todo4 = {
  __typename: "Todo4",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodo4Input = {
  id: string,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTodo4Input = {
  id: string,
};

export type CreateTodo5Input = {
  name: string,
  description?: string | null,
  id?: string | null,
};

export type ModelTodo5ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodo5ConditionInput | null > | null,
  or?: Array< ModelTodo5ConditionInput | null > | null,
  not?: ModelTodo5ConditionInput | null,
};

export type Todo5 = {
  __typename: "Todo5",
  name: string,
  description?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodo5Input = {
  name?: string | null,
  description?: string | null,
  id: string,
};

export type DeleteTodo5Input = {
  id: string,
};

export type CreateTodo6Input = {
  id?: string | null,
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTodo6ConditionInput = {
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo6ConditionInput | null > | null,
  or?: Array< ModelTodo6ConditionInput | null > | null,
  not?: ModelTodo6ConditionInput | null,
};

export type Todo6 = {
  __typename: "Todo6",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateTodo6Input = {
  id: string,
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTodo6Input = {
  id: string,
  name: string,
};

export type CreateTodo7Input = {
  id?: string | null,
  name: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTodo7ConditionInput = {
  description?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo7ConditionInput | null > | null,
  or?: Array< ModelTodo7ConditionInput | null > | null,
  not?: ModelTodo7ConditionInput | null,
};

export type Todo7 = {
  __typename: "Todo7",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateTodo7Input = {
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type DeleteTodo7Input = {
  id: string,
  name: string,
  createdAt: string,
};

export type CreateProject11Input = {
  customProjectId: string,
  name: string,
  description: string,
  project11TeamId?: string | null,
  project11TeamName?: string | null,
};

export type ModelProject11ConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelProject11ConditionInput | null > | null,
  or?: Array< ModelProject11ConditionInput | null > | null,
  not?: ModelProject11ConditionInput | null,
  project11TeamId?: ModelIDInput | null,
  project11TeamName?: ModelStringInput | null,
};

export type Project11 = {
  __typename: "Project11",
  customProjectId: string,
  name: string,
  description: string,
  team?: Team11 | null,
  createdAt: string,
  updatedAt: string,
  project11TeamId?: string | null,
  project11TeamName?: string | null,
};

export type Team11 = {
  __typename: "Team11",
  customTeamId: string,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProject11Input = {
  customProjectId: string,
  name: string,
  description?: string | null,
  project11TeamId?: string | null,
  project11TeamName?: string | null,
};

export type DeleteProject11Input = {
  customProjectId: string,
  name: string,
};

export type CreateTeam11Input = {
  customTeamId: string,
  name: string,
  description: string,
};

export type ModelTeam11ConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelTeam11ConditionInput | null > | null,
  or?: Array< ModelTeam11ConditionInput | null > | null,
  not?: ModelTeam11ConditionInput | null,
};

export type UpdateTeam11Input = {
  customTeamId: string,
  name: string,
  description?: string | null,
};

export type DeleteTeam11Input = {
  customTeamId: string,
  name: string,
};

export type CreateProject12Input = {
  customProjectId: string,
  name: string,
  description: string,
  project12TeamId?: string | null,
  project12TeamName?: string | null,
};

export type ModelProject12ConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelProject12ConditionInput | null > | null,
  or?: Array< ModelProject12ConditionInput | null > | null,
  not?: ModelProject12ConditionInput | null,
  project12TeamId?: ModelIDInput | null,
  project12TeamName?: ModelStringInput | null,
};

export type Project12 = {
  __typename: "Project12",
  customProjectId: string,
  name: string,
  description: string,
  team?: Team12 | null,
  createdAt: string,
  updatedAt: string,
  project12TeamId?: string | null,
  project12TeamName?: string | null,
};

export type Team12 = {
  __typename: "Team12",
  customTeamId: string,
  name: string,
  description: string,
  project?: Project12 | null,
  createdAt: string,
  updatedAt: string,
  team12ProjectId?: string | null,
  team12ProjectName?: string | null,
};

export type UpdateProject12Input = {
  customProjectId: string,
  name: string,
  description?: string | null,
  project12TeamId?: string | null,
  project12TeamName?: string | null,
};

export type DeleteProject12Input = {
  customProjectId: string,
  name: string,
};

export type CreateTeam12Input = {
  customTeamId: string,
  name: string,
  description: string,
  team12ProjectId?: string | null,
  team12ProjectName?: string | null,
};

export type ModelTeam12ConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelTeam12ConditionInput | null > | null,
  or?: Array< ModelTeam12ConditionInput | null > | null,
  not?: ModelTeam12ConditionInput | null,
  team12ProjectId?: ModelIDInput | null,
  team12ProjectName?: ModelStringInput | null,
};

export type UpdateTeam12Input = {
  customTeamId: string,
  name: string,
  description?: string | null,
  team12ProjectId?: string | null,
  team12ProjectName?: string | null,
};

export type DeleteTeam12Input = {
  customTeamId: string,
  name: string,
};

export type CreatePost21Input = {
  customPostId: string,
  title: string,
  content: string,
};

export type ModelPost21ConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelPost21ConditionInput | null > | null,
  or?: Array< ModelPost21ConditionInput | null > | null,
  not?: ModelPost21ConditionInput | null,
};

export type Post21 = {
  __typename: "Post21",
  customPostId: string,
  title: string,
  content: string,
  comments?: ModelComment21Connection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelComment21Connection = {
  __typename: "ModelComment21Connection",
  items:  Array<Comment21 | null >,
  nextToken?: string | null,
};

export type Comment21 = {
  __typename: "Comment21",
  customCommentId: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  post21CommentsId?: string | null,
  post21CommentsTitle?: string | null,
};

export type UpdatePost21Input = {
  customPostId: string,
  title: string,
  content?: string | null,
};

export type DeletePost21Input = {
  customPostId: string,
  title: string,
};

export type CreateComment21Input = {
  customCommentId: string,
  content: string,
  post21CommentsId?: string | null,
  post21CommentsTitle?: string | null,
};

export type ModelComment21ConditionInput = {
  and?: Array< ModelComment21ConditionInput | null > | null,
  or?: Array< ModelComment21ConditionInput | null > | null,
  not?: ModelComment21ConditionInput | null,
  post21CommentsId?: ModelIDInput | null,
  post21CommentsTitle?: ModelStringInput | null,
};

export type UpdateComment21Input = {
  customCommentId: string,
  content: string,
  post21CommentsId?: string | null,
  post21CommentsTitle?: string | null,
};

export type DeleteComment21Input = {
  customCommentId: string,
  content: string,
};

export type CreatePost22Input = {
  customPostId: string,
  title: string,
};

export type ModelPost22ConditionInput = {
  and?: Array< ModelPost22ConditionInput | null > | null,
  or?: Array< ModelPost22ConditionInput | null > | null,
  not?: ModelPost22ConditionInput | null,
};

export type Post22 = {
  __typename: "Post22",
  customPostId: string,
  title: string,
  comments?: ModelComment22Connection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelComment22Connection = {
  __typename: "ModelComment22Connection",
  items:  Array<Comment22 | null >,
  nextToken?: string | null,
};

export type Comment22 = {
  __typename: "Comment22",
  customCommentId: string,
  content: string,
  post?: Post22 | null,
  createdAt: string,
  updatedAt: string,
  post22CommentsId?: string | null,
  post22CommentsTitle?: string | null,
};

export type UpdatePost22Input = {
  customPostId: string,
  title: string,
};

export type DeletePost22Input = {
  customPostId: string,
  title: string,
};

export type CreateComment22Input = {
  customCommentId: string,
  content: string,
  post22CommentsId?: string | null,
  post22CommentsTitle?: string | null,
};

export type ModelComment22ConditionInput = {
  and?: Array< ModelComment22ConditionInput | null > | null,
  or?: Array< ModelComment22ConditionInput | null > | null,
  not?: ModelComment22ConditionInput | null,
  post22CommentsId?: ModelIDInput | null,
  post22CommentsTitle?: ModelStringInput | null,
};

export type UpdateComment22Input = {
  customCommentId: string,
  content: string,
  post22CommentsId?: string | null,
  post22CommentsTitle?: string | null,
};

export type DeleteComment22Input = {
  customCommentId: string,
  content: string,
};

export type CreatePost31Input = {
  customPostId: string,
  title: string,
  content?: string | null,
  id?: string | null,
};

export type ModelPost31ConditionInput = {
  customPostId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPost31ConditionInput | null > | null,
  or?: Array< ModelPost31ConditionInput | null > | null,
  not?: ModelPost31ConditionInput | null,
};

export type Post31 = {
  __typename: "Post31",
  customPostId: string,
  title: string,
  content?: string | null,
  tags?: ModelPostTags31Connection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostTags31Connection = {
  __typename: "ModelPostTags31Connection",
  items:  Array<PostTags31 | null >,
  nextToken?: string | null,
};

export type PostTags31 = {
  __typename: "PostTags31",
  id: string,
  post31ID: string,
  tag31ID: string,
  tag31label: string,
  post31: Post31,
  tag31: Tag31,
  createdAt: string,
  updatedAt: string,
};

export type Tag31 = {
  __typename: "Tag31",
  customTagId: string,
  label: string,
  posts?: ModelPostTags31Connection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePost31Input = {
  customPostId?: string | null,
  title?: string | null,
  content?: string | null,
  id: string,
};

export type DeletePost31Input = {
  id: string,
};

export type CreateTag31Input = {
  customTagId: string,
  label: string,
};

export type ModelTag31ConditionInput = {
  and?: Array< ModelTag31ConditionInput | null > | null,
  or?: Array< ModelTag31ConditionInput | null > | null,
  not?: ModelTag31ConditionInput | null,
};

export type UpdateTag31Input = {
  customTagId: string,
  label: string,
};

export type DeleteTag31Input = {
  customTagId: string,
  label: string,
};

export type CreatePostTags31Input = {
  id?: string | null,
  post31ID: string,
  tag31ID: string,
  tag31label: string,
};

export type ModelPostTags31ConditionInput = {
  post31ID?: ModelIDInput | null,
  tag31ID?: ModelIDInput | null,
  tag31label?: ModelStringInput | null,
  and?: Array< ModelPostTags31ConditionInput | null > | null,
  or?: Array< ModelPostTags31ConditionInput | null > | null,
  not?: ModelPostTags31ConditionInput | null,
};

export type UpdatePostTags31Input = {
  id: string,
  post31ID?: string | null,
  tag31ID?: string | null,
  tag31label?: string | null,
};

export type DeletePostTags31Input = {
  id: string,
};

export type ModelTodoFilterInput = {
  customId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTodo2FilterInput = {
  customId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo2FilterInput | null > | null,
  or?: Array< ModelTodo2FilterInput | null > | null,
  not?: ModelTodo2FilterInput | null,
};

export type ModelTodo2Connection = {
  __typename: "ModelTodo2Connection",
  items:  Array<Todo2 | null >,
  nextToken?: string | null,
};

export type ModelTodo3FilterInput = {
  id?: ModelIDInput | null,
  customId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo3FilterInput | null > | null,
  or?: Array< ModelTodo3FilterInput | null > | null,
  not?: ModelTodo3FilterInput | null,
};

export type ModelTodo3Connection = {
  __typename: "ModelTodo3Connection",
  items:  Array<Todo3 | null >,
  nextToken?: string | null,
};

export type ModelTodo4FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo4FilterInput | null > | null,
  or?: Array< ModelTodo4FilterInput | null > | null,
  not?: ModelTodo4FilterInput | null,
};

export type ModelTodo4Connection = {
  __typename: "ModelTodo4Connection",
  items:  Array<Todo4 | null >,
  nextToken?: string | null,
};

export type ModelTodo5FilterInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodo5FilterInput | null > | null,
  or?: Array< ModelTodo5FilterInput | null > | null,
  not?: ModelTodo5FilterInput | null,
};

export type ModelTodo5Connection = {
  __typename: "ModelTodo5Connection",
  items:  Array<Todo5 | null >,
  nextToken?: string | null,
};

export type ModelTodo6FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo6FilterInput | null > | null,
  or?: Array< ModelTodo6FilterInput | null > | null,
  not?: ModelTodo6FilterInput | null,
};

export type ModelTodo6Connection = {
  __typename: "ModelTodo6Connection",
  items:  Array<Todo6 | null >,
  nextToken?: string | null,
};

export type ModelTodo7PrimaryCompositeKeyConditionInput = {
  eq?: ModelTodo7PrimaryCompositeKeyInput | null,
  le?: ModelTodo7PrimaryCompositeKeyInput | null,
  lt?: ModelTodo7PrimaryCompositeKeyInput | null,
  ge?: ModelTodo7PrimaryCompositeKeyInput | null,
  gt?: ModelTodo7PrimaryCompositeKeyInput | null,
  between?: Array< ModelTodo7PrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelTodo7PrimaryCompositeKeyInput | null,
};

export type ModelTodo7PrimaryCompositeKeyInput = {
  name?: string | null,
  createdAt?: string | null,
};

export type ModelTodo7FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo7FilterInput | null > | null,
  or?: Array< ModelTodo7FilterInput | null > | null,
  not?: ModelTodo7FilterInput | null,
};

export type ModelTodo7Connection = {
  __typename: "ModelTodo7Connection",
  items:  Array<Todo7 | null >,
  nextToken?: string | null,
};

export type ModelProject11FilterInput = {
  customProjectId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProject11FilterInput | null > | null,
  or?: Array< ModelProject11FilterInput | null > | null,
  not?: ModelProject11FilterInput | null,
  project11TeamId?: ModelIDInput | null,
  project11TeamName?: ModelStringInput | null,
};

export type ModelProject11Connection = {
  __typename: "ModelProject11Connection",
  items:  Array<Project11 | null >,
  nextToken?: string | null,
};

export type ModelTeam11FilterInput = {
  customTeamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeam11FilterInput | null > | null,
  or?: Array< ModelTeam11FilterInput | null > | null,
  not?: ModelTeam11FilterInput | null,
};

export type ModelTeam11Connection = {
  __typename: "ModelTeam11Connection",
  items:  Array<Team11 | null >,
  nextToken?: string | null,
};

export type ModelProject12FilterInput = {
  customProjectId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProject12FilterInput | null > | null,
  or?: Array< ModelProject12FilterInput | null > | null,
  not?: ModelProject12FilterInput | null,
  project12TeamId?: ModelIDInput | null,
  project12TeamName?: ModelStringInput | null,
};

export type ModelProject12Connection = {
  __typename: "ModelProject12Connection",
  items:  Array<Project12 | null >,
  nextToken?: string | null,
};

export type ModelTeam12FilterInput = {
  customTeamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeam12FilterInput | null > | null,
  or?: Array< ModelTeam12FilterInput | null > | null,
  not?: ModelTeam12FilterInput | null,
  team12ProjectId?: ModelIDInput | null,
  team12ProjectName?: ModelStringInput | null,
};

export type ModelTeam12Connection = {
  __typename: "ModelTeam12Connection",
  items:  Array<Team12 | null >,
  nextToken?: string | null,
};

export type ModelPost21FilterInput = {
  customPostId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPost21FilterInput | null > | null,
  or?: Array< ModelPost21FilterInput | null > | null,
  not?: ModelPost21FilterInput | null,
};

export type ModelPost21Connection = {
  __typename: "ModelPost21Connection",
  items:  Array<Post21 | null >,
  nextToken?: string | null,
};

export type ModelComment21FilterInput = {
  customCommentId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelComment21FilterInput | null > | null,
  or?: Array< ModelComment21FilterInput | null > | null,
  not?: ModelComment21FilterInput | null,
  post21CommentsId?: ModelIDInput | null,
  post21CommentsTitle?: ModelStringInput | null,
};

export type ModelPost22FilterInput = {
  customPostId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPost22FilterInput | null > | null,
  or?: Array< ModelPost22FilterInput | null > | null,
  not?: ModelPost22FilterInput | null,
};

export type ModelPost22Connection = {
  __typename: "ModelPost22Connection",
  items:  Array<Post22 | null >,
  nextToken?: string | null,
};

export type ModelComment22FilterInput = {
  customCommentId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelComment22FilterInput | null > | null,
  or?: Array< ModelComment22FilterInput | null > | null,
  not?: ModelComment22FilterInput | null,
  post22CommentsId?: ModelIDInput | null,
  post22CommentsTitle?: ModelStringInput | null,
};

export type ModelPost31FilterInput = {
  customPostId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPost31FilterInput | null > | null,
  or?: Array< ModelPost31FilterInput | null > | null,
  not?: ModelPost31FilterInput | null,
};

export type ModelPost31Connection = {
  __typename: "ModelPost31Connection",
  items:  Array<Post31 | null >,
  nextToken?: string | null,
};

export type ModelTag31FilterInput = {
  customTagId?: ModelIDInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelTag31FilterInput | null > | null,
  or?: Array< ModelTag31FilterInput | null > | null,
  not?: ModelTag31FilterInput | null,
};

export type ModelTag31Connection = {
  __typename: "ModelTag31Connection",
  items:  Array<Tag31 | null >,
  nextToken?: string | null,
};

export type ModelPostTags31FilterInput = {
  id?: ModelIDInput | null,
  post31ID?: ModelIDInput | null,
  tag31ID?: ModelIDInput | null,
  tag31label?: ModelStringInput | null,
  and?: Array< ModelPostTags31FilterInput | null > | null,
  or?: Array< ModelPostTags31FilterInput | null > | null,
  not?: ModelPostTags31FilterInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodo2MutationVariables = {
  input: CreateTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type CreateTodo2Mutation = {
  createTodo2?:  {
    __typename: "Todo2",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateTodo2MutationVariables = {
  input: UpdateTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type UpdateTodo2Mutation = {
  updateTodo2?:  {
    __typename: "Todo2",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteTodo2MutationVariables = {
  input: DeleteTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type DeleteTodo2Mutation = {
  deleteTodo2?:  {
    __typename: "Todo2",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type CreateTodo3MutationVariables = {
  input: CreateTodo3Input,
  condition?: ModelTodo3ConditionInput | null,
};

export type CreateTodo3Mutation = {
  createTodo3?:  {
    __typename: "Todo3",
    id: string,
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateTodo3MutationVariables = {
  input: UpdateTodo3Input,
  condition?: ModelTodo3ConditionInput | null,
};

export type UpdateTodo3Mutation = {
  updateTodo3?:  {
    __typename: "Todo3",
    id: string,
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteTodo3MutationVariables = {
  input: DeleteTodo3Input,
  condition?: ModelTodo3ConditionInput | null,
};

export type DeleteTodo3Mutation = {
  deleteTodo3?:  {
    __typename: "Todo3",
    id: string,
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type CreateTodo4MutationVariables = {
  input: CreateTodo4Input,
  condition?: ModelTodo4ConditionInput | null,
};

export type CreateTodo4Mutation = {
  createTodo4?:  {
    __typename: "Todo4",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodo4MutationVariables = {
  input: UpdateTodo4Input,
  condition?: ModelTodo4ConditionInput | null,
};

export type UpdateTodo4Mutation = {
  updateTodo4?:  {
    __typename: "Todo4",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodo4MutationVariables = {
  input: DeleteTodo4Input,
  condition?: ModelTodo4ConditionInput | null,
};

export type DeleteTodo4Mutation = {
  deleteTodo4?:  {
    __typename: "Todo4",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodo5MutationVariables = {
  input: CreateTodo5Input,
  condition?: ModelTodo5ConditionInput | null,
};

export type CreateTodo5Mutation = {
  createTodo5?:  {
    __typename: "Todo5",
    name: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodo5MutationVariables = {
  input: UpdateTodo5Input,
  condition?: ModelTodo5ConditionInput | null,
};

export type UpdateTodo5Mutation = {
  updateTodo5?:  {
    __typename: "Todo5",
    name: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodo5MutationVariables = {
  input: DeleteTodo5Input,
  condition?: ModelTodo5ConditionInput | null,
};

export type DeleteTodo5Mutation = {
  deleteTodo5?:  {
    __typename: "Todo5",
    name: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodo6MutationVariables = {
  input: CreateTodo6Input,
  condition?: ModelTodo6ConditionInput | null,
};

export type CreateTodo6Mutation = {
  createTodo6?:  {
    __typename: "Todo6",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateTodo6MutationVariables = {
  input: UpdateTodo6Input,
  condition?: ModelTodo6ConditionInput | null,
};

export type UpdateTodo6Mutation = {
  updateTodo6?:  {
    __typename: "Todo6",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteTodo6MutationVariables = {
  input: DeleteTodo6Input,
  condition?: ModelTodo6ConditionInput | null,
};

export type DeleteTodo6Mutation = {
  deleteTodo6?:  {
    __typename: "Todo6",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type CreateTodo7MutationVariables = {
  input: CreateTodo7Input,
  condition?: ModelTodo7ConditionInput | null,
};

export type CreateTodo7Mutation = {
  createTodo7?:  {
    __typename: "Todo7",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateTodo7MutationVariables = {
  input: UpdateTodo7Input,
  condition?: ModelTodo7ConditionInput | null,
};

export type UpdateTodo7Mutation = {
  updateTodo7?:  {
    __typename: "Todo7",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteTodo7MutationVariables = {
  input: DeleteTodo7Input,
  condition?: ModelTodo7ConditionInput | null,
};

export type DeleteTodo7Mutation = {
  deleteTodo7?:  {
    __typename: "Todo7",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type CreateProject11MutationVariables = {
  input: CreateProject11Input,
  condition?: ModelProject11ConditionInput | null,
};

export type CreateProject11Mutation = {
  createProject11?:  {
    __typename: "Project11",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    project11TeamId?: string | null,
    project11TeamName?: string | null,
  } | null,
};

export type UpdateProject11MutationVariables = {
  input: UpdateProject11Input,
  condition?: ModelProject11ConditionInput | null,
};

export type UpdateProject11Mutation = {
  updateProject11?:  {
    __typename: "Project11",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    project11TeamId?: string | null,
    project11TeamName?: string | null,
  } | null,
};

export type DeleteProject11MutationVariables = {
  input: DeleteProject11Input,
  condition?: ModelProject11ConditionInput | null,
};

export type DeleteProject11Mutation = {
  deleteProject11?:  {
    __typename: "Project11",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    project11TeamId?: string | null,
    project11TeamName?: string | null,
  } | null,
};

export type CreateTeam11MutationVariables = {
  input: CreateTeam11Input,
  condition?: ModelTeam11ConditionInput | null,
};

export type CreateTeam11Mutation = {
  createTeam11?:  {
    __typename: "Team11",
    customTeamId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeam11MutationVariables = {
  input: UpdateTeam11Input,
  condition?: ModelTeam11ConditionInput | null,
};

export type UpdateTeam11Mutation = {
  updateTeam11?:  {
    __typename: "Team11",
    customTeamId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeam11MutationVariables = {
  input: DeleteTeam11Input,
  condition?: ModelTeam11ConditionInput | null,
};

export type DeleteTeam11Mutation = {
  deleteTeam11?:  {
    __typename: "Team11",
    customTeamId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProject12MutationVariables = {
  input: CreateProject12Input,
  condition?: ModelProject12ConditionInput | null,
};

export type CreateProject12Mutation = {
  createProject12?:  {
    __typename: "Project12",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    project12TeamId?: string | null,
    project12TeamName?: string | null,
  } | null,
};

export type UpdateProject12MutationVariables = {
  input: UpdateProject12Input,
  condition?: ModelProject12ConditionInput | null,
};

export type UpdateProject12Mutation = {
  updateProject12?:  {
    __typename: "Project12",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    project12TeamId?: string | null,
    project12TeamName?: string | null,
  } | null,
};

export type DeleteProject12MutationVariables = {
  input: DeleteProject12Input,
  condition?: ModelProject12ConditionInput | null,
};

export type DeleteProject12Mutation = {
  deleteProject12?:  {
    __typename: "Project12",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    project12TeamId?: string | null,
    project12TeamName?: string | null,
  } | null,
};

export type CreateTeam12MutationVariables = {
  input: CreateTeam12Input,
  condition?: ModelTeam12ConditionInput | null,
};

export type CreateTeam12Mutation = {
  createTeam12?:  {
    __typename: "Team12",
    customTeamId: string,
    name: string,
    description: string,
    project?:  {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    team12ProjectId?: string | null,
    team12ProjectName?: string | null,
  } | null,
};

export type UpdateTeam12MutationVariables = {
  input: UpdateTeam12Input,
  condition?: ModelTeam12ConditionInput | null,
};

export type UpdateTeam12Mutation = {
  updateTeam12?:  {
    __typename: "Team12",
    customTeamId: string,
    name: string,
    description: string,
    project?:  {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    team12ProjectId?: string | null,
    team12ProjectName?: string | null,
  } | null,
};

export type DeleteTeam12MutationVariables = {
  input: DeleteTeam12Input,
  condition?: ModelTeam12ConditionInput | null,
};

export type DeleteTeam12Mutation = {
  deleteTeam12?:  {
    __typename: "Team12",
    customTeamId: string,
    name: string,
    description: string,
    project?:  {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    team12ProjectId?: string | null,
    team12ProjectName?: string | null,
  } | null,
};

export type CreatePost21MutationVariables = {
  input: CreatePost21Input,
  condition?: ModelPost21ConditionInput | null,
};

export type CreatePost21Mutation = {
  createPost21?:  {
    __typename: "Post21",
    customPostId: string,
    title: string,
    content: string,
    comments?:  {
      __typename: "ModelComment21Connection",
      items:  Array< {
        __typename: "Comment21",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post21CommentsId?: string | null,
        post21CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePost21MutationVariables = {
  input: UpdatePost21Input,
  condition?: ModelPost21ConditionInput | null,
};

export type UpdatePost21Mutation = {
  updatePost21?:  {
    __typename: "Post21",
    customPostId: string,
    title: string,
    content: string,
    comments?:  {
      __typename: "ModelComment21Connection",
      items:  Array< {
        __typename: "Comment21",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post21CommentsId?: string | null,
        post21CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePost21MutationVariables = {
  input: DeletePost21Input,
  condition?: ModelPost21ConditionInput | null,
};

export type DeletePost21Mutation = {
  deletePost21?:  {
    __typename: "Post21",
    customPostId: string,
    title: string,
    content: string,
    comments?:  {
      __typename: "ModelComment21Connection",
      items:  Array< {
        __typename: "Comment21",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post21CommentsId?: string | null,
        post21CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateComment21MutationVariables = {
  input: CreateComment21Input,
  condition?: ModelComment21ConditionInput | null,
};

export type CreateComment21Mutation = {
  createComment21?:  {
    __typename: "Comment21",
    customCommentId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post21CommentsId?: string | null,
    post21CommentsTitle?: string | null,
  } | null,
};

export type UpdateComment21MutationVariables = {
  input: UpdateComment21Input,
  condition?: ModelComment21ConditionInput | null,
};

export type UpdateComment21Mutation = {
  updateComment21?:  {
    __typename: "Comment21",
    customCommentId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post21CommentsId?: string | null,
    post21CommentsTitle?: string | null,
  } | null,
};

export type DeleteComment21MutationVariables = {
  input: DeleteComment21Input,
  condition?: ModelComment21ConditionInput | null,
};

export type DeleteComment21Mutation = {
  deleteComment21?:  {
    __typename: "Comment21",
    customCommentId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post21CommentsId?: string | null,
    post21CommentsTitle?: string | null,
  } | null,
};

export type CreatePost22MutationVariables = {
  input: CreatePost22Input,
  condition?: ModelPost22ConditionInput | null,
};

export type CreatePost22Mutation = {
  createPost22?:  {
    __typename: "Post22",
    customPostId: string,
    title: string,
    comments?:  {
      __typename: "ModelComment22Connection",
      items:  Array< {
        __typename: "Comment22",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post22CommentsId?: string | null,
        post22CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePost22MutationVariables = {
  input: UpdatePost22Input,
  condition?: ModelPost22ConditionInput | null,
};

export type UpdatePost22Mutation = {
  updatePost22?:  {
    __typename: "Post22",
    customPostId: string,
    title: string,
    comments?:  {
      __typename: "ModelComment22Connection",
      items:  Array< {
        __typename: "Comment22",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post22CommentsId?: string | null,
        post22CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePost22MutationVariables = {
  input: DeletePost22Input,
  condition?: ModelPost22ConditionInput | null,
};

export type DeletePost22Mutation = {
  deletePost22?:  {
    __typename: "Post22",
    customPostId: string,
    title: string,
    comments?:  {
      __typename: "ModelComment22Connection",
      items:  Array< {
        __typename: "Comment22",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post22CommentsId?: string | null,
        post22CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateComment22MutationVariables = {
  input: CreateComment22Input,
  condition?: ModelComment22ConditionInput | null,
};

export type CreateComment22Mutation = {
  createComment22?:  {
    __typename: "Comment22",
    customCommentId: string,
    content: string,
    post?:  {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    post22CommentsId?: string | null,
    post22CommentsTitle?: string | null,
  } | null,
};

export type UpdateComment22MutationVariables = {
  input: UpdateComment22Input,
  condition?: ModelComment22ConditionInput | null,
};

export type UpdateComment22Mutation = {
  updateComment22?:  {
    __typename: "Comment22",
    customCommentId: string,
    content: string,
    post?:  {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    post22CommentsId?: string | null,
    post22CommentsTitle?: string | null,
  } | null,
};

export type DeleteComment22MutationVariables = {
  input: DeleteComment22Input,
  condition?: ModelComment22ConditionInput | null,
};

export type DeleteComment22Mutation = {
  deleteComment22?:  {
    __typename: "Comment22",
    customCommentId: string,
    content: string,
    post?:  {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    post22CommentsId?: string | null,
    post22CommentsTitle?: string | null,
  } | null,
};

export type CreatePost31MutationVariables = {
  input: CreatePost31Input,
  condition?: ModelPost31ConditionInput | null,
};

export type CreatePost31Mutation = {
  createPost31?:  {
    __typename: "Post31",
    customPostId: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePost31MutationVariables = {
  input: UpdatePost31Input,
  condition?: ModelPost31ConditionInput | null,
};

export type UpdatePost31Mutation = {
  updatePost31?:  {
    __typename: "Post31",
    customPostId: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePost31MutationVariables = {
  input: DeletePost31Input,
  condition?: ModelPost31ConditionInput | null,
};

export type DeletePost31Mutation = {
  deletePost31?:  {
    __typename: "Post31",
    customPostId: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTag31MutationVariables = {
  input: CreateTag31Input,
  condition?: ModelTag31ConditionInput | null,
};

export type CreateTag31Mutation = {
  createTag31?:  {
    __typename: "Tag31",
    customTagId: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTag31MutationVariables = {
  input: UpdateTag31Input,
  condition?: ModelTag31ConditionInput | null,
};

export type UpdateTag31Mutation = {
  updateTag31?:  {
    __typename: "Tag31",
    customTagId: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTag31MutationVariables = {
  input: DeleteTag31Input,
  condition?: ModelTag31ConditionInput | null,
};

export type DeleteTag31Mutation = {
  deleteTag31?:  {
    __typename: "Tag31",
    customTagId: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostTags31MutationVariables = {
  input: CreatePostTags31Input,
  condition?: ModelPostTags31ConditionInput | null,
};

export type CreatePostTags31Mutation = {
  createPostTags31?:  {
    __typename: "PostTags31",
    id: string,
    post31ID: string,
    tag31ID: string,
    tag31label: string,
    post31:  {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    tag31:  {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostTags31MutationVariables = {
  input: UpdatePostTags31Input,
  condition?: ModelPostTags31ConditionInput | null,
};

export type UpdatePostTags31Mutation = {
  updatePostTags31?:  {
    __typename: "PostTags31",
    id: string,
    post31ID: string,
    tag31ID: string,
    tag31label: string,
    post31:  {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    tag31:  {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostTags31MutationVariables = {
  input: DeletePostTags31Input,
  condition?: ModelPostTags31ConditionInput | null,
};

export type DeletePostTags31Mutation = {
  deletePostTags31?:  {
    __typename: "PostTags31",
    id: string,
    post31ID: string,
    tag31ID: string,
    tag31label: string,
    post31:  {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    tag31:  {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  customId: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  customId?: string | null,
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      customId: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodo2QueryVariables = {
  customId: string,
  createdAt: string,
};

export type GetTodo2Query = {
  getTodo2?:  {
    __typename: "Todo2",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListTodo2sQueryVariables = {
  customId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelTodo2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodo2sQuery = {
  listTodo2s?:  {
    __typename: "ModelTodo2Connection",
    items:  Array< {
      __typename: "Todo2",
      customId: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodo3QueryVariables = {
  id: string,
};

export type GetTodo3Query = {
  getTodo3?:  {
    __typename: "Todo3",
    id: string,
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListTodo3sQueryVariables = {
  filter?: ModelTodo3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodo3sQuery = {
  listTodo3s?:  {
    __typename: "ModelTodo3Connection",
    items:  Array< {
      __typename: "Todo3",
      id: string,
      customId: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodo4QueryVariables = {
  id: string,
};

export type GetTodo4Query = {
  getTodo4?:  {
    __typename: "Todo4",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodo4sQueryVariables = {
  filter?: ModelTodo4FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodo4sQuery = {
  listTodo4s?:  {
    __typename: "ModelTodo4Connection",
    items:  Array< {
      __typename: "Todo4",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodo5QueryVariables = {
  id: string,
};

export type GetTodo5Query = {
  getTodo5?:  {
    __typename: "Todo5",
    name: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodo5sQueryVariables = {
  filter?: ModelTodo5FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodo5sQuery = {
  listTodo5s?:  {
    __typename: "ModelTodo5Connection",
    items:  Array< {
      __typename: "Todo5",
      name: string,
      description?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodo6QueryVariables = {
  id: string,
  name: string,
};

export type GetTodo6Query = {
  getTodo6?:  {
    __typename: "Todo6",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListTodo6sQueryVariables = {
  id?: string | null,
  name?: ModelStringKeyConditionInput | null,
  filter?: ModelTodo6FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodo6sQuery = {
  listTodo6s?:  {
    __typename: "ModelTodo6Connection",
    items:  Array< {
      __typename: "Todo6",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodo7QueryVariables = {
  id: string,
  name: string,
  createdAt: string,
};

export type GetTodo7Query = {
  getTodo7?:  {
    __typename: "Todo7",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListTodo7sQueryVariables = {
  id?: string | null,
  nameCreatedAt?: ModelTodo7PrimaryCompositeKeyConditionInput | null,
  filter?: ModelTodo7FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodo7sQuery = {
  listTodo7s?:  {
    __typename: "ModelTodo7Connection",
    items:  Array< {
      __typename: "Todo7",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProject11QueryVariables = {
  customProjectId: string,
  name: string,
};

export type GetProject11Query = {
  getProject11?:  {
    __typename: "Project11",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    project11TeamId?: string | null,
    project11TeamName?: string | null,
  } | null,
};

export type ListProject11sQueryVariables = {
  customProjectId?: string | null,
  name?: ModelStringKeyConditionInput | null,
  filter?: ModelProject11FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProject11sQuery = {
  listProject11s?:  {
    __typename: "ModelProject11Connection",
    items:  Array< {
      __typename: "Project11",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team11",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      project11TeamId?: string | null,
      project11TeamName?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeam11QueryVariables = {
  customTeamId: string,
  name: string,
};

export type GetTeam11Query = {
  getTeam11?:  {
    __typename: "Team11",
    customTeamId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeam11sQueryVariables = {
  customTeamId?: string | null,
  name?: ModelStringKeyConditionInput | null,
  filter?: ModelTeam11FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTeam11sQuery = {
  listTeam11s?:  {
    __typename: "ModelTeam11Connection",
    items:  Array< {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProject12QueryVariables = {
  customProjectId: string,
  name: string,
};

export type GetProject12Query = {
  getProject12?:  {
    __typename: "Project12",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    project12TeamId?: string | null,
    project12TeamName?: string | null,
  } | null,
};

export type ListProject12sQueryVariables = {
  customProjectId?: string | null,
  name?: ModelStringKeyConditionInput | null,
  filter?: ModelProject12FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProject12sQuery = {
  listProject12s?:  {
    __typename: "ModelProject12Connection",
    items:  Array< {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeam12QueryVariables = {
  customTeamId: string,
  name: string,
};

export type GetTeam12Query = {
  getTeam12?:  {
    __typename: "Team12",
    customTeamId: string,
    name: string,
    description: string,
    project?:  {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    team12ProjectId?: string | null,
    team12ProjectName?: string | null,
  } | null,
};

export type ListTeam12sQueryVariables = {
  customTeamId?: string | null,
  name?: ModelStringKeyConditionInput | null,
  filter?: ModelTeam12FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTeam12sQuery = {
  listTeam12s?:  {
    __typename: "ModelTeam12Connection",
    items:  Array< {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPost21QueryVariables = {
  customPostId: string,
  title: string,
};

export type GetPost21Query = {
  getPost21?:  {
    __typename: "Post21",
    customPostId: string,
    title: string,
    content: string,
    comments?:  {
      __typename: "ModelComment21Connection",
      items:  Array< {
        __typename: "Comment21",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post21CommentsId?: string | null,
        post21CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPost21sQueryVariables = {
  customPostId?: string | null,
  title?: ModelStringKeyConditionInput | null,
  filter?: ModelPost21FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPost21sQuery = {
  listPost21s?:  {
    __typename: "ModelPost21Connection",
    items:  Array< {
      __typename: "Post21",
      customPostId: string,
      title: string,
      content: string,
      comments?:  {
        __typename: "ModelComment21Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetComment21QueryVariables = {
  customCommentId: string,
  content: string,
};

export type GetComment21Query = {
  getComment21?:  {
    __typename: "Comment21",
    customCommentId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post21CommentsId?: string | null,
    post21CommentsTitle?: string | null,
  } | null,
};

export type ListComment21sQueryVariables = {
  customCommentId?: string | null,
  content?: ModelStringKeyConditionInput | null,
  filter?: ModelComment21FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListComment21sQuery = {
  listComment21s?:  {
    __typename: "ModelComment21Connection",
    items:  Array< {
      __typename: "Comment21",
      customCommentId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      post21CommentsId?: string | null,
      post21CommentsTitle?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPost22QueryVariables = {
  customPostId: string,
  title: string,
};

export type GetPost22Query = {
  getPost22?:  {
    __typename: "Post22",
    customPostId: string,
    title: string,
    comments?:  {
      __typename: "ModelComment22Connection",
      items:  Array< {
        __typename: "Comment22",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post22CommentsId?: string | null,
        post22CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPost22sQueryVariables = {
  customPostId?: string | null,
  title?: ModelStringKeyConditionInput | null,
  filter?: ModelPost22FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPost22sQuery = {
  listPost22s?:  {
    __typename: "ModelPost22Connection",
    items:  Array< {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetComment22QueryVariables = {
  customCommentId: string,
  content: string,
};

export type GetComment22Query = {
  getComment22?:  {
    __typename: "Comment22",
    customCommentId: string,
    content: string,
    post?:  {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    post22CommentsId?: string | null,
    post22CommentsTitle?: string | null,
  } | null,
};

export type ListComment22sQueryVariables = {
  customCommentId?: string | null,
  content?: ModelStringKeyConditionInput | null,
  filter?: ModelComment22FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListComment22sQuery = {
  listComment22s?:  {
    __typename: "ModelComment22Connection",
    items:  Array< {
      __typename: "Comment22",
      customCommentId: string,
      content: string,
      post?:  {
        __typename: "Post22",
        customPostId: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      post22CommentsId?: string | null,
      post22CommentsTitle?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPost31QueryVariables = {
  id: string,
};

export type GetPost31Query = {
  getPost31?:  {
    __typename: "Post31",
    customPostId: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPost31sQueryVariables = {
  filter?: ModelPost31FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPost31sQuery = {
  listPost31s?:  {
    __typename: "ModelPost31Connection",
    items:  Array< {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTag31QueryVariables = {
  customTagId: string,
  label: string,
};

export type GetTag31Query = {
  getTag31?:  {
    __typename: "Tag31",
    customTagId: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTag31sQueryVariables = {
  customTagId?: string | null,
  label?: ModelStringKeyConditionInput | null,
  filter?: ModelTag31FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTag31sQuery = {
  listTag31s?:  {
    __typename: "ModelTag31Connection",
    items:  Array< {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostTags31QueryVariables = {
  id: string,
};

export type GetPostTags31Query = {
  getPostTags31?:  {
    __typename: "PostTags31",
    id: string,
    post31ID: string,
    tag31ID: string,
    tag31label: string,
    post31:  {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    tag31:  {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostTags31sQueryVariables = {
  filter?: ModelPostTags31FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTags31sQuery = {
  listPostTags31s?:  {
    __typename: "ModelPostTags31Connection",
    items:  Array< {
      __typename: "PostTags31",
      id: string,
      post31ID: string,
      tag31ID: string,
      tag31label: string,
      post31:  {
        __typename: "Post31",
        customPostId: string,
        title: string,
        content?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      tag31:  {
        __typename: "Tag31",
        customTagId: string,
        label: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TodoByCustomIdAndCreatedAtQueryVariables = {
  customId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTodo3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TodoByCustomIdAndCreatedAtQuery = {
  todoByCustomIdAndCreatedAt?:  {
    __typename: "ModelTodo3Connection",
    items:  Array< {
      __typename: "Todo3",
      id: string,
      customId: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodo2Subscription = {
  onCreateTodo2?:  {
    __typename: "Todo2",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateTodo2Subscription = {
  onUpdateTodo2?:  {
    __typename: "Todo2",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteTodo2Subscription = {
  onDeleteTodo2?:  {
    __typename: "Todo2",
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateTodo3Subscription = {
  onCreateTodo3?:  {
    __typename: "Todo3",
    id: string,
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateTodo3Subscription = {
  onUpdateTodo3?:  {
    __typename: "Todo3",
    id: string,
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteTodo3Subscription = {
  onDeleteTodo3?:  {
    __typename: "Todo3",
    id: string,
    customId: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateTodo4Subscription = {
  onCreateTodo4?:  {
    __typename: "Todo4",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodo4Subscription = {
  onUpdateTodo4?:  {
    __typename: "Todo4",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodo4Subscription = {
  onDeleteTodo4?:  {
    __typename: "Todo4",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodo5Subscription = {
  onCreateTodo5?:  {
    __typename: "Todo5",
    name: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodo5Subscription = {
  onUpdateTodo5?:  {
    __typename: "Todo5",
    name: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodo5Subscription = {
  onDeleteTodo5?:  {
    __typename: "Todo5",
    name: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodo6Subscription = {
  onCreateTodo6?:  {
    __typename: "Todo6",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateTodo6Subscription = {
  onUpdateTodo6?:  {
    __typename: "Todo6",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteTodo6Subscription = {
  onDeleteTodo6?:  {
    __typename: "Todo6",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateTodo7Subscription = {
  onCreateTodo7?:  {
    __typename: "Todo7",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateTodo7Subscription = {
  onUpdateTodo7?:  {
    __typename: "Todo7",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteTodo7Subscription = {
  onDeleteTodo7?:  {
    __typename: "Todo7",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateProject11Subscription = {
  onCreateProject11?:  {
    __typename: "Project11",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    project11TeamId?: string | null,
    project11TeamName?: string | null,
  } | null,
};

export type OnUpdateProject11Subscription = {
  onUpdateProject11?:  {
    __typename: "Project11",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    project11TeamId?: string | null,
    project11TeamName?: string | null,
  } | null,
};

export type OnDeleteProject11Subscription = {
  onDeleteProject11?:  {
    __typename: "Project11",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team11",
      customTeamId: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    project11TeamId?: string | null,
    project11TeamName?: string | null,
  } | null,
};

export type OnCreateTeam11Subscription = {
  onCreateTeam11?:  {
    __typename: "Team11",
    customTeamId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeam11Subscription = {
  onUpdateTeam11?:  {
    __typename: "Team11",
    customTeamId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeam11Subscription = {
  onDeleteTeam11?:  {
    __typename: "Team11",
    customTeamId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProject12Subscription = {
  onCreateProject12?:  {
    __typename: "Project12",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    project12TeamId?: string | null,
    project12TeamName?: string | null,
  } | null,
};

export type OnUpdateProject12Subscription = {
  onUpdateProject12?:  {
    __typename: "Project12",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    project12TeamId?: string | null,
    project12TeamName?: string | null,
  } | null,
};

export type OnDeleteProject12Subscription = {
  onDeleteProject12?:  {
    __typename: "Project12",
    customProjectId: string,
    name: string,
    description: string,
    team?:  {
      __typename: "Team12",
      customTeamId: string,
      name: string,
      description: string,
      project?:  {
        __typename: "Project12",
        customProjectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        project12TeamId?: string | null,
        project12TeamName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      team12ProjectId?: string | null,
      team12ProjectName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    project12TeamId?: string | null,
    project12TeamName?: string | null,
  } | null,
};

export type OnCreateTeam12Subscription = {
  onCreateTeam12?:  {
    __typename: "Team12",
    customTeamId: string,
    name: string,
    description: string,
    project?:  {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    team12ProjectId?: string | null,
    team12ProjectName?: string | null,
  } | null,
};

export type OnUpdateTeam12Subscription = {
  onUpdateTeam12?:  {
    __typename: "Team12",
    customTeamId: string,
    name: string,
    description: string,
    project?:  {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    team12ProjectId?: string | null,
    team12ProjectName?: string | null,
  } | null,
};

export type OnDeleteTeam12Subscription = {
  onDeleteTeam12?:  {
    __typename: "Team12",
    customTeamId: string,
    name: string,
    description: string,
    project?:  {
      __typename: "Project12",
      customProjectId: string,
      name: string,
      description: string,
      team?:  {
        __typename: "Team12",
        customTeamId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        team12ProjectId?: string | null,
        team12ProjectName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      project12TeamId?: string | null,
      project12TeamName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    team12ProjectId?: string | null,
    team12ProjectName?: string | null,
  } | null,
};

export type OnCreatePost21Subscription = {
  onCreatePost21?:  {
    __typename: "Post21",
    customPostId: string,
    title: string,
    content: string,
    comments?:  {
      __typename: "ModelComment21Connection",
      items:  Array< {
        __typename: "Comment21",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post21CommentsId?: string | null,
        post21CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePost21Subscription = {
  onUpdatePost21?:  {
    __typename: "Post21",
    customPostId: string,
    title: string,
    content: string,
    comments?:  {
      __typename: "ModelComment21Connection",
      items:  Array< {
        __typename: "Comment21",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post21CommentsId?: string | null,
        post21CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePost21Subscription = {
  onDeletePost21?:  {
    __typename: "Post21",
    customPostId: string,
    title: string,
    content: string,
    comments?:  {
      __typename: "ModelComment21Connection",
      items:  Array< {
        __typename: "Comment21",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post21CommentsId?: string | null,
        post21CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateComment21Subscription = {
  onCreateComment21?:  {
    __typename: "Comment21",
    customCommentId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post21CommentsId?: string | null,
    post21CommentsTitle?: string | null,
  } | null,
};

export type OnUpdateComment21Subscription = {
  onUpdateComment21?:  {
    __typename: "Comment21",
    customCommentId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post21CommentsId?: string | null,
    post21CommentsTitle?: string | null,
  } | null,
};

export type OnDeleteComment21Subscription = {
  onDeleteComment21?:  {
    __typename: "Comment21",
    customCommentId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post21CommentsId?: string | null,
    post21CommentsTitle?: string | null,
  } | null,
};

export type OnCreatePost22Subscription = {
  onCreatePost22?:  {
    __typename: "Post22",
    customPostId: string,
    title: string,
    comments?:  {
      __typename: "ModelComment22Connection",
      items:  Array< {
        __typename: "Comment22",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post22CommentsId?: string | null,
        post22CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePost22Subscription = {
  onUpdatePost22?:  {
    __typename: "Post22",
    customPostId: string,
    title: string,
    comments?:  {
      __typename: "ModelComment22Connection",
      items:  Array< {
        __typename: "Comment22",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post22CommentsId?: string | null,
        post22CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePost22Subscription = {
  onDeletePost22?:  {
    __typename: "Post22",
    customPostId: string,
    title: string,
    comments?:  {
      __typename: "ModelComment22Connection",
      items:  Array< {
        __typename: "Comment22",
        customCommentId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post22CommentsId?: string | null,
        post22CommentsTitle?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateComment22Subscription = {
  onCreateComment22?:  {
    __typename: "Comment22",
    customCommentId: string,
    content: string,
    post?:  {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    post22CommentsId?: string | null,
    post22CommentsTitle?: string | null,
  } | null,
};

export type OnUpdateComment22Subscription = {
  onUpdateComment22?:  {
    __typename: "Comment22",
    customCommentId: string,
    content: string,
    post?:  {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    post22CommentsId?: string | null,
    post22CommentsTitle?: string | null,
  } | null,
};

export type OnDeleteComment22Subscription = {
  onDeleteComment22?:  {
    __typename: "Comment22",
    customCommentId: string,
    content: string,
    post?:  {
      __typename: "Post22",
      customPostId: string,
      title: string,
      comments?:  {
        __typename: "ModelComment22Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    post22CommentsId?: string | null,
    post22CommentsTitle?: string | null,
  } | null,
};

export type OnCreatePost31Subscription = {
  onCreatePost31?:  {
    __typename: "Post31",
    customPostId: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePost31Subscription = {
  onUpdatePost31?:  {
    __typename: "Post31",
    customPostId: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePost31Subscription = {
  onDeletePost31?:  {
    __typename: "Post31",
    customPostId: string,
    title: string,
    content?: string | null,
    tags?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTag31Subscription = {
  onCreateTag31?:  {
    __typename: "Tag31",
    customTagId: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTag31Subscription = {
  onUpdateTag31?:  {
    __typename: "Tag31",
    customTagId: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTag31Subscription = {
  onDeleteTag31?:  {
    __typename: "Tag31",
    customTagId: string,
    label: string,
    posts?:  {
      __typename: "ModelPostTags31Connection",
      items:  Array< {
        __typename: "PostTags31",
        id: string,
        post31ID: string,
        tag31ID: string,
        tag31label: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostTags31Subscription = {
  onCreatePostTags31?:  {
    __typename: "PostTags31",
    id: string,
    post31ID: string,
    tag31ID: string,
    tag31label: string,
    post31:  {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    tag31:  {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostTags31Subscription = {
  onUpdatePostTags31?:  {
    __typename: "PostTags31",
    id: string,
    post31ID: string,
    tag31ID: string,
    tag31label: string,
    post31:  {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    tag31:  {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostTags31Subscription = {
  onDeletePostTags31?:  {
    __typename: "PostTags31",
    id: string,
    post31ID: string,
    tag31ID: string,
    tag31label: string,
    post31:  {
      __typename: "Post31",
      customPostId: string,
      title: string,
      content?: string | null,
      tags?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    tag31:  {
      __typename: "Tag31",
      customTagId: string,
      label: string,
      posts?:  {
        __typename: "ModelPostTags31Connection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
