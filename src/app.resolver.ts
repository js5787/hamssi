import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as types from './types';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
    constructor(private readonly appService: AppService) {}

    @Query(() => [types.User], { name: 'users' })
    users(@Context() ctx: any, @Args({ name: 'id', type: () => String }) id?: string): types.User[] {
        return this.appService.getUsers(id);
    }

    @Mutation(() => types.User, { name: 'user' })
    user(
        @Context() ctx: any,
        @Args({ name: 'id', type: () => String }) id: string,
        @Args({ name: 'input', type: () => types.UpdateUserInput }) input: types.UpdateUserInput
    ): types.User {
        return this.appService.updateUser(id, input.description);
    }
}
