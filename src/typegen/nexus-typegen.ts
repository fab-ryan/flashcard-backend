/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../schema/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Answer: { // root type
    answer?: string | null; // String
    id?: string | null; // String
  }
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Category: { // root type
    categoryDescription: string; // String!
    categoryName: string; // String!
    id: string; // String!
  }
  Mutation: {};
  Query: {};
  Question: { // root type
    id: string; // String!
    question: string; // String!
  }
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    password: string; // String!
    userName: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Answer: { // field return type
    answer: string | null; // String
    id: string | null; // String
    question: NexusGenRootTypes['Question']; // Question!
  }
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Category: { // field return type
    categoryDescription: string; // String!
    categoryName: string; // String!
    id: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: { // field return type
    createAnswer: NexusGenRootTypes['Answer']; // Answer!
    createCategory: NexusGenRootTypes['Category'] | null; // Category
    createQuestion: NexusGenRootTypes['Question']; // Question!
    deleteAnswer: NexusGenRootTypes['Answer']; // Answer!
    deleteCategory: NexusGenRootTypes['Category'] | null; // Category
    deleteQuestion: NexusGenRootTypes['Question']; // Question!
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateAnswer: NexusGenRootTypes['Answer']; // Answer!
    updateCategory: NexusGenRootTypes['Category'] | null; // Category
    updateQuestion: NexusGenRootTypes['Question']; // Question!
  }
  Query: { // field return type
    allAnswer: NexusGenRootTypes['Answer'][]; // [Answer!]!
    allCategories: NexusGenRootTypes['Category'][]; // [Category!]!
    allQuestion: NexusGenRootTypes['Question'][]; // [Question!]!
    allUsers: NexusGenRootTypes['User'][]; // [User!]!
  }
  Question: { // field return type
    category: NexusGenRootTypes['Category']; // Category!
    id: string; // String!
    question: string; // String!
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    password: string; // String!
    userName: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Answer: { // field return type name
    answer: 'String'
    id: 'String'
    question: 'Question'
  }
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Category: { // field return type name
    categoryDescription: 'String'
    categoryName: 'String'
    id: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    createAnswer: 'Answer'
    createCategory: 'Category'
    createQuestion: 'Question'
    deleteAnswer: 'Answer'
    deleteCategory: 'Category'
    deleteQuestion: 'Question'
    login: 'AuthPayload'
    signup: 'AuthPayload'
    updateAnswer: 'Answer'
    updateCategory: 'Category'
    updateQuestion: 'Question'
  }
  Query: { // field return type name
    allAnswer: 'Answer'
    allCategories: 'Category'
    allQuestion: 'Question'
    allUsers: 'User'
  }
  Question: { // field return type name
    category: 'Category'
    id: 'String'
    question: 'String'
  }
  User: { // field return type name
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
    password: 'String'
    userName: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAnswer: { // args
      answer: string; // String!
      question: string; // String!
    }
    createCategory: { // args
      categoryDescription: string; // String!
      categoryName: string; // String!
    }
    createQuestion: { // args
      category: string; // String!
      question: string; // String!
    }
    deleteAnswer: { // args
      id: string; // String!
    }
    deleteCategory: { // args
      id: string; // String!
    }
    deleteQuestion: { // args
      id: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
      userName: string; // String!
    }
    updateAnswer: { // args
      answer: string; // String!
      id: string; // String!
    }
    updateCategory: { // args
      categoryDescription: string; // String!
      categoryName: string; // String!
      id: string; // String!
    }
    updateQuestion: { // args
      category: string; // String!
      id: string; // String!
      question: string; // String!
    }
  }
  Query: {
    allAnswer: { // args
      skip?: number | null; // Int
      take: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}