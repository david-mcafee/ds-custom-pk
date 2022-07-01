// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Todo2, Todo3, Todo4, Todo5, Todo6, Todo7, Project11, Team11, Project12, Team12, Post21, Comment21, Post22, Comment22, Post31, Tag31, PostTags31 } = initSchema(schema);

export {
  Todo,
  Todo2,
  Todo3,
  Todo4,
  Todo5,
  Todo6,
  Todo7,
  Project11,
  Team11,
  Project12,
  Team12,
  Post21,
  Comment21,
  Post22,
  Comment22,
  Post31,
  Tag31,
  PostTags31
};