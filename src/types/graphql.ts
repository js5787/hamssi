
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UpdateUserInput {
    description?: Nullable<string>;
}

export class User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(id?: Nullable<string>): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export abstract class IMutation {
    abstract user(id: string, input: UpdateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
