import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  money: any;
  uuid: any;
};

/** columns and relationships of "Money" */
export type Money = {
  __typename?: 'Money';
  amount: Scalars['money'];
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** aggregated selection of "Money" */
export type Money_Aggregate = {
  __typename?: 'Money_aggregate';
  aggregate?: Maybe<Money_Aggregate_Fields>;
  nodes: Array<Money>;
};

/** aggregate fields of "Money" */
export type Money_Aggregate_Fields = {
  __typename?: 'Money_aggregate_fields';
  avg?: Maybe<Money_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Money_Max_Fields>;
  min?: Maybe<Money_Min_Fields>;
  stddev?: Maybe<Money_Stddev_Fields>;
  stddev_pop?: Maybe<Money_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Money_Stddev_Samp_Fields>;
  sum?: Maybe<Money_Sum_Fields>;
  var_pop?: Maybe<Money_Var_Pop_Fields>;
  var_samp?: Maybe<Money_Var_Samp_Fields>;
  variance?: Maybe<Money_Variance_Fields>;
};


/** aggregate fields of "Money" */
export type Money_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Money_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Money_Avg_Fields = {
  __typename?: 'Money_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Money". All fields are combined with a logical 'AND'. */
export type Money_Bool_Exp = {
  _and?: InputMaybe<Array<Money_Bool_Exp>>;
  _not?: InputMaybe<Money_Bool_Exp>;
  _or?: InputMaybe<Array<Money_Bool_Exp>>;
  amount?: InputMaybe<Money_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Money" */
export enum Money_Constraint {
  /** unique or primary key constraint on columns "id" */
  MoneyPkey = 'Money_pkey',
  /** unique or primary key constraint on columns "userId" */
  MoneyUserIdKey = 'Money_userId_key'
}

/** input type for incrementing numeric columns in table "Money" */
export type Money_Inc_Input = {
  amount?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "Money" */
export type Money_Insert_Input = {
  amount?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Money_Max_Fields = {
  __typename?: 'Money_max_fields';
  amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Money_Min_Fields = {
  __typename?: 'Money_min_fields';
  amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "Money" */
export type Money_Mutation_Response = {
  __typename?: 'Money_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Money>;
};

/** on_conflict condition type for table "Money" */
export type Money_On_Conflict = {
  constraint: Money_Constraint;
  update_columns?: Array<Money_Update_Column>;
  where?: InputMaybe<Money_Bool_Exp>;
};

/** Ordering options when selecting data from "Money". */
export type Money_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Money */
export type Money_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Money" */
export enum Money_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "Money" */
export type Money_Set_Input = {
  amount?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Money_Stddev_Fields = {
  __typename?: 'Money_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Money_Stddev_Pop_Fields = {
  __typename?: 'Money_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Money_Stddev_Samp_Fields = {
  __typename?: 'Money_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Money" */
export type Money_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Money_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Money_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Money_Sum_Fields = {
  __typename?: 'Money_sum_fields';
  amount?: Maybe<Scalars['money']>;
};

/** update columns of table "Money" */
export enum Money_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

export type Money_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Money_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Money_Set_Input>;
  where: Money_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Money_Var_Pop_Fields = {
  __typename?: 'Money_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Money_Var_Samp_Fields = {
  __typename?: 'Money_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Money_Variance_Fields = {
  __typename?: 'Money_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "name" */
  UserNameKey = 'User_name_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Money" */
  delete_Money?: Maybe<Money_Mutation_Response>;
  /** delete single row from the table: "Money" */
  delete_Money_by_pk?: Maybe<Money>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Money" */
  insert_Money?: Maybe<Money_Mutation_Response>;
  /** insert a single row into the table: "Money" */
  insert_Money_one?: Maybe<Money>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Money" */
  update_Money?: Maybe<Money_Mutation_Response>;
  /** update single row of the table: "Money" */
  update_Money_by_pk?: Maybe<Money>;
  /** update multiples rows of table: "Money" */
  update_Money_many?: Maybe<Array<Maybe<Money_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_MoneyArgs = {
  where: Money_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Money_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_MoneyArgs = {
  objects: Array<Money_Insert_Input>;
  on_conflict?: InputMaybe<Money_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Money_OneArgs = {
  object: Money_Insert_Input;
  on_conflict?: InputMaybe<Money_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MoneyArgs = {
  _inc?: InputMaybe<Money_Inc_Input>;
  _set?: InputMaybe<Money_Set_Input>;
  where: Money_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Money_By_PkArgs = {
  _inc?: InputMaybe<Money_Inc_Input>;
  _set?: InputMaybe<Money_Set_Input>;
  pk_columns: Money_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Money_ManyArgs = {
  updates: Array<Money_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Money" */
  Money: Array<Money>;
  /** fetch aggregated fields from the table: "Money" */
  Money_aggregate: Money_Aggregate;
  /** fetch data from the table: "Money" using primary key columns */
  Money_by_pk?: Maybe<Money>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootMoneyArgs = {
  distinct_on?: InputMaybe<Array<Money_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Order_By>>;
  where?: InputMaybe<Money_Bool_Exp>;
};


export type Query_RootMoney_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Money_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Order_By>>;
  where?: InputMaybe<Money_Bool_Exp>;
};


export type Query_RootMoney_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Money" */
  Money: Array<Money>;
  /** fetch aggregated fields from the table: "Money" */
  Money_aggregate: Money_Aggregate;
  /** fetch data from the table: "Money" using primary key columns */
  Money_by_pk?: Maybe<Money>;
  /** fetch data from the table in a streaming manner: "Money" */
  Money_stream: Array<Money>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
};


export type Subscription_RootMoneyArgs = {
  distinct_on?: InputMaybe<Array<Money_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Order_By>>;
  where?: InputMaybe<Money_Bool_Exp>;
};


export type Subscription_RootMoney_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Money_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Money_Order_By>>;
  where?: InputMaybe<Money_Bool_Exp>;
};


export type Subscription_RootMoney_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMoney_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Money_Stream_Cursor_Input>>;
  where?: InputMaybe<Money_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetUserIdByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserIdByNameQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', id: any }> };

export type GetMoneyByUserIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetMoneyByUserIdQuery = { __typename?: 'query_root', Money: Array<{ __typename?: 'Money', amount: any }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Money: ResolverTypeWrapper<Money>;
  Money_aggregate: ResolverTypeWrapper<Money_Aggregate>;
  Money_aggregate_fields: ResolverTypeWrapper<Money_Aggregate_Fields>;
  Money_avg_fields: ResolverTypeWrapper<Money_Avg_Fields>;
  Money_bool_exp: Money_Bool_Exp;
  Money_constraint: Money_Constraint;
  Money_inc_input: Money_Inc_Input;
  Money_insert_input: Money_Insert_Input;
  Money_max_fields: ResolverTypeWrapper<Money_Max_Fields>;
  Money_min_fields: ResolverTypeWrapper<Money_Min_Fields>;
  Money_mutation_response: ResolverTypeWrapper<Money_Mutation_Response>;
  Money_on_conflict: Money_On_Conflict;
  Money_order_by: Money_Order_By;
  Money_pk_columns_input: Money_Pk_Columns_Input;
  Money_select_column: Money_Select_Column;
  Money_set_input: Money_Set_Input;
  Money_stddev_fields: ResolverTypeWrapper<Money_Stddev_Fields>;
  Money_stddev_pop_fields: ResolverTypeWrapper<Money_Stddev_Pop_Fields>;
  Money_stddev_samp_fields: ResolverTypeWrapper<Money_Stddev_Samp_Fields>;
  Money_stream_cursor_input: Money_Stream_Cursor_Input;
  Money_stream_cursor_value_input: Money_Stream_Cursor_Value_Input;
  Money_sum_fields: ResolverTypeWrapper<Money_Sum_Fields>;
  Money_update_column: Money_Update_Column;
  Money_updates: Money_Updates;
  Money_var_pop_fields: ResolverTypeWrapper<Money_Var_Pop_Fields>;
  Money_var_samp_fields: ResolverTypeWrapper<Money_Var_Samp_Fields>;
  Money_variance_fields: ResolverTypeWrapper<Money_Variance_Fields>;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  User: ResolverTypeWrapper<User>;
  User_aggregate: ResolverTypeWrapper<User_Aggregate>;
  User_aggregate_fields: ResolverTypeWrapper<User_Aggregate_Fields>;
  User_bool_exp: User_Bool_Exp;
  User_constraint: User_Constraint;
  User_insert_input: User_Insert_Input;
  User_max_fields: ResolverTypeWrapper<User_Max_Fields>;
  User_min_fields: ResolverTypeWrapper<User_Min_Fields>;
  User_mutation_response: ResolverTypeWrapper<User_Mutation_Response>;
  User_on_conflict: User_On_Conflict;
  User_order_by: User_Order_By;
  User_pk_columns_input: User_Pk_Columns_Input;
  User_select_column: User_Select_Column;
  User_set_input: User_Set_Input;
  User_stream_cursor_input: User_Stream_Cursor_Input;
  User_stream_cursor_value_input: User_Stream_Cursor_Value_Input;
  User_update_column: User_Update_Column;
  User_updates: User_Updates;
  cursor_ordering: Cursor_Ordering;
  money: ResolverTypeWrapper<Scalars['money']>;
  money_comparison_exp: Money_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Money: Money;
  Money_aggregate: Money_Aggregate;
  Money_aggregate_fields: Money_Aggregate_Fields;
  Money_avg_fields: Money_Avg_Fields;
  Money_bool_exp: Money_Bool_Exp;
  Money_inc_input: Money_Inc_Input;
  Money_insert_input: Money_Insert_Input;
  Money_max_fields: Money_Max_Fields;
  Money_min_fields: Money_Min_Fields;
  Money_mutation_response: Money_Mutation_Response;
  Money_on_conflict: Money_On_Conflict;
  Money_order_by: Money_Order_By;
  Money_pk_columns_input: Money_Pk_Columns_Input;
  Money_set_input: Money_Set_Input;
  Money_stddev_fields: Money_Stddev_Fields;
  Money_stddev_pop_fields: Money_Stddev_Pop_Fields;
  Money_stddev_samp_fields: Money_Stddev_Samp_Fields;
  Money_stream_cursor_input: Money_Stream_Cursor_Input;
  Money_stream_cursor_value_input: Money_Stream_Cursor_Value_Input;
  Money_sum_fields: Money_Sum_Fields;
  Money_updates: Money_Updates;
  Money_var_pop_fields: Money_Var_Pop_Fields;
  Money_var_samp_fields: Money_Var_Samp_Fields;
  Money_variance_fields: Money_Variance_Fields;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  User: User;
  User_aggregate: User_Aggregate;
  User_aggregate_fields: User_Aggregate_Fields;
  User_bool_exp: User_Bool_Exp;
  User_insert_input: User_Insert_Input;
  User_max_fields: User_Max_Fields;
  User_min_fields: User_Min_Fields;
  User_mutation_response: User_Mutation_Response;
  User_on_conflict: User_On_Conflict;
  User_order_by: User_Order_By;
  User_pk_columns_input: User_Pk_Columns_Input;
  User_set_input: User_Set_Input;
  User_stream_cursor_input: User_Stream_Cursor_Input;
  User_stream_cursor_value_input: User_Stream_Cursor_Value_Input;
  User_updates: User_Updates;
  money: Scalars['money'];
  money_comparison_exp: Money_Comparison_Exp;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MoneyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = {
  amount?: Resolver<ResolversTypes['money'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_aggregate'] = ResolversParentTypes['Money_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Money_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_aggregate_fields'] = ResolversParentTypes['Money_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Money_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Money_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['Money_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Money_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Money_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Money_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Money_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Money_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Money_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Money_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Money_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_avg_fields'] = ResolversParentTypes['Money_avg_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_max_fields'] = ResolversParentTypes['Money_max_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['money']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_min_fields'] = ResolversParentTypes['Money_min_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['money']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_mutation_response'] = ResolversParentTypes['Money_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_stddev_fields'] = ResolversParentTypes['Money_stddev_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_stddev_pop_fields'] = ResolversParentTypes['Money_stddev_pop_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_stddev_samp_fields'] = ResolversParentTypes['Money_stddev_samp_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_sum_fields'] = ResolversParentTypes['Money_sum_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_var_pop_fields'] = ResolversParentTypes['Money_var_pop_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_var_samp_fields'] = ResolversParentTypes['Money_var_samp_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Money_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money_variance_fields'] = ResolversParentTypes['Money_variance_fields']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_aggregate'] = ResolversParentTypes['User_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['User_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_aggregate_fields'] = ResolversParentTypes['User_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['User_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['User_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_max_fields'] = ResolversParentTypes['User_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_min_fields'] = ResolversParentTypes['User_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_mutation_response'] = ResolversParentTypes['User_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MoneyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['money'], any> {
  name: 'money';
}

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_Money?: Resolver<Maybe<ResolversTypes['Money_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MoneyArgs, 'where'>>;
  delete_Money_by_pk?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Money_By_PkArgs, 'id'>>;
  delete_User?: Resolver<Maybe<ResolversTypes['User_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UserArgs, 'where'>>;
  delete_User_by_pk?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_By_PkArgs, 'id'>>;
  insert_Money?: Resolver<Maybe<ResolversTypes['Money_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MoneyArgs, 'objects'>>;
  insert_Money_one?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Money_OneArgs, 'object'>>;
  insert_User?: Resolver<Maybe<ResolversTypes['User_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UserArgs, 'objects'>>;
  insert_User_one?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_OneArgs, 'object'>>;
  update_Money?: Resolver<Maybe<ResolversTypes['Money_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MoneyArgs, 'where'>>;
  update_Money_by_pk?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Money_By_PkArgs, 'pk_columns'>>;
  update_Money_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['Money_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Money_ManyArgs, 'updates'>>;
  update_User?: Resolver<Maybe<ResolversTypes['User_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UserArgs, 'where'>>;
  update_User_by_pk?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_By_PkArgs, 'pk_columns'>>;
  update_User_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['User_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_ManyArgs, 'updates'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  Money?: Resolver<Array<ResolversTypes['Money']>, ParentType, ContextType, Partial<Query_RootMoneyArgs>>;
  Money_aggregate?: Resolver<ResolversTypes['Money_aggregate'], ParentType, ContextType, Partial<Query_RootMoney_AggregateArgs>>;
  Money_by_pk?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType, RequireFields<Query_RootMoney_By_PkArgs, 'id'>>;
  User?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<Query_RootUserArgs>>;
  User_aggregate?: Resolver<ResolversTypes['User_aggregate'], ParentType, ContextType, Partial<Query_RootUser_AggregateArgs>>;
  User_by_pk?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Query_RootUser_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  Money?: SubscriptionResolver<Array<ResolversTypes['Money']>, "Money", ParentType, ContextType, Partial<Subscription_RootMoneyArgs>>;
  Money_aggregate?: SubscriptionResolver<ResolversTypes['Money_aggregate'], "Money_aggregate", ParentType, ContextType, Partial<Subscription_RootMoney_AggregateArgs>>;
  Money_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Money']>, "Money_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMoney_By_PkArgs, 'id'>>;
  Money_stream?: SubscriptionResolver<Array<ResolversTypes['Money']>, "Money_stream", ParentType, ContextType, RequireFields<Subscription_RootMoney_StreamArgs, 'batch_size' | 'cursor'>>;
  User?: SubscriptionResolver<Array<ResolversTypes['User']>, "User", ParentType, ContextType, Partial<Subscription_RootUserArgs>>;
  User_aggregate?: SubscriptionResolver<ResolversTypes['User_aggregate'], "User_aggregate", ParentType, ContextType, Partial<Subscription_RootUser_AggregateArgs>>;
  User_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "User_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_By_PkArgs, 'id'>>;
  User_stream?: SubscriptionResolver<Array<ResolversTypes['User']>, "User_stream", ParentType, ContextType, RequireFields<Subscription_RootUser_StreamArgs, 'batch_size' | 'cursor'>>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  Money?: MoneyResolvers<ContextType>;
  Money_aggregate?: Money_AggregateResolvers<ContextType>;
  Money_aggregate_fields?: Money_Aggregate_FieldsResolvers<ContextType>;
  Money_avg_fields?: Money_Avg_FieldsResolvers<ContextType>;
  Money_max_fields?: Money_Max_FieldsResolvers<ContextType>;
  Money_min_fields?: Money_Min_FieldsResolvers<ContextType>;
  Money_mutation_response?: Money_Mutation_ResponseResolvers<ContextType>;
  Money_stddev_fields?: Money_Stddev_FieldsResolvers<ContextType>;
  Money_stddev_pop_fields?: Money_Stddev_Pop_FieldsResolvers<ContextType>;
  Money_stddev_samp_fields?: Money_Stddev_Samp_FieldsResolvers<ContextType>;
  Money_sum_fields?: Money_Sum_FieldsResolvers<ContextType>;
  Money_var_pop_fields?: Money_Var_Pop_FieldsResolvers<ContextType>;
  Money_var_samp_fields?: Money_Var_Samp_FieldsResolvers<ContextType>;
  Money_variance_fields?: Money_Variance_FieldsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  User_aggregate?: User_AggregateResolvers<ContextType>;
  User_aggregate_fields?: User_Aggregate_FieldsResolvers<ContextType>;
  User_max_fields?: User_Max_FieldsResolvers<ContextType>;
  User_min_fields?: User_Min_FieldsResolvers<ContextType>;
  User_mutation_response?: User_Mutation_ResponseResolvers<ContextType>;
  money?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};


export const GetUserIdByNameDocument = gql`
    query getUserIdByName($name: String!) {
  User(where: {name: {_eq: $name}}) {
    id
  }
}
    `;
export const GetMoneyByUserIdDocument = gql`
    query getMoneyByUserId($id: uuid!) {
  Money(where: {userId: {_eq: $id}}) {
    amount
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUserIdByName(variables: GetUserIdByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserIdByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserIdByNameQuery>(GetUserIdByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserIdByName', 'query');
    },
    getMoneyByUserId(variables: GetMoneyByUserIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMoneyByUserIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMoneyByUserIdQuery>(GetMoneyByUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMoneyByUserId', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;