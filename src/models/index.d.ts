import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier, CompositeIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";





export declare class Todo {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Todo, 'customId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customId: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class Todo2 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Todo2, ['customId', 'createdAt']>;
  };
  readonly customId: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo2>);
  static copyOf(source: Todo2, mutator: (draft: MutableModel<Todo2>) => MutableModel<Todo2> | void): Todo2;
}

export declare class Todo3 {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo3, 'id'>;
  };
  readonly id: string;
  readonly customId: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo3>);
  static copyOf(source: Todo3, mutator: (draft: MutableModel<Todo3>) => MutableModel<Todo3> | void): Todo3;
}

export declare class Todo4 {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo4, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Todo4>);
  static copyOf(source: Todo4, mutator: (draft: MutableModel<Todo4>) => MutableModel<Todo4> | void): Todo4;
}

export declare class Todo5 {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo5, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo5>);
  static copyOf(source: Todo5, mutator: (draft: MutableModel<Todo5>) => MutableModel<Todo5> | void): Todo5;
}

export declare class Todo6 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Todo6, ['id', 'name']>;
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo6>);
  static copyOf(source: Todo6, mutator: (draft: MutableModel<Todo6>) => MutableModel<Todo6> | void): Todo6;
}

export declare class Todo7 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Todo7, ['id', 'name', 'createdAt']>;
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo7>);
  static copyOf(source: Todo7, mutator: (draft: MutableModel<Todo7>) => MutableModel<Todo7> | void): Todo7;
}

export declare class Project11 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Project11, ['customProjectId', 'name']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customProjectId: string;
  readonly name: string;
  readonly description: string;
  readonly team?: Team11 | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly project11TeamCustomTeamId?: string | null;
  readonly project11TeamName?: string | null;
  constructor(init: ModelInit<Project11>);
  static copyOf(source: Project11, mutator: (draft: MutableModel<Project11>) => MutableModel<Project11> | void): Project11;
}

export declare class Team11 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Team11, ['customTeamId', 'name']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customTeamId: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Team11>);
  static copyOf(source: Team11, mutator: (draft: MutableModel<Team11>) => MutableModel<Team11> | void): Team11;
}

export declare class Project12 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Project12, ['customProjectId', 'name']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customProjectId: string;
  readonly name: string;
  readonly description: string;
  readonly team?: Team12 | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly project12TeamCustomTeamId?: string | null;
  readonly project12TeamName?: string | null;
  constructor(init: ModelInit<Project12>);
  static copyOf(source: Project12, mutator: (draft: MutableModel<Project12>) => MutableModel<Project12> | void): Project12;
}

export declare class Team12 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Team12, ['customTeamId', 'name']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customTeamId: string;
  readonly name: string;
  readonly description: string;
  readonly project?: Project12 | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly team12ProjectCustomProjectId?: string | null;
  readonly team12ProjectName?: string | null;
  constructor(init: ModelInit<Team12>);
  static copyOf(source: Team12, mutator: (draft: MutableModel<Team12>) => MutableModel<Team12> | void): Team12;
}

export declare class Post21 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Post21, ['customPostId', 'title']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customPostId: string;
  readonly title: string;
  readonly content: string;
  readonly comments?: (Comment21 | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post21>);
  static copyOf(source: Post21, mutator: (draft: MutableModel<Post21>) => MutableModel<Post21> | void): Post21;
}

export declare class Comment21 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Comment21, ['customCommentId', 'content']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customCommentId: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly post21CommentsCustomPostId?: string | null;
  readonly post21CommentsTitle?: string | null;
  constructor(init: ModelInit<Comment21>);
  static copyOf(source: Comment21, mutator: (draft: MutableModel<Comment21>) => MutableModel<Comment21> | void): Comment21;
}

export declare class Post22 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Post22, ['customPostId', 'title']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customPostId: string;
  readonly title: string;
  readonly comments?: (Comment22 | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post22>);
  static copyOf(source: Post22, mutator: (draft: MutableModel<Post22>) => MutableModel<Post22> | void): Post22;
}

export declare class Comment22 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Comment22, ['customCommentId', 'content']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customCommentId: string;
  readonly content: string;
  readonly post?: Post22 | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly post22CommentsCustomPostId?: string | null;
  readonly post22CommentsTitle?: string | null;
  constructor(init: ModelInit<Comment22>);
  static copyOf(source: Comment22, mutator: (draft: MutableModel<Comment22>) => MutableModel<Comment22> | void): Comment22;
}

export declare class Post31 {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post31, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customPostId: string;
  readonly title: string;
  readonly content?: string | null;
  readonly tags?: (PostTags31 | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post31>);
  static copyOf(source: Post31, mutator: (draft: MutableModel<Post31>) => MutableModel<Post31> | void): Post31;
}

export declare class Tag31 {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Tag31, ['customTagId', 'label']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customTagId: string;
  readonly label: string;
  readonly posts?: (PostTags31 | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag31>);
  static copyOf(source: Tag31, mutator: (draft: MutableModel<Tag31>) => MutableModel<Tag31> | void): Tag31;
}

export declare class PostTags31 {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTags31, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post31ID: string;
  readonly tag31ID: string;
  readonly tag31label: string;
  readonly post31: Post31;
  readonly tag31: Tag31;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PostTags31>);
  static copyOf(source: PostTags31, mutator: (draft: MutableModel<PostTags31>) => MutableModel<PostTags31> | void): PostTags31;
}