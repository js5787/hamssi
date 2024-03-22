import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as types from './types';
import { AppService } from './app.service';

@Resolver()
export class ChatResolver {
    constructor(private readonly appService: AppService) {}

    @Query(() => [types.User], { name: 'users' })
    users(@Context() ctx: any, @Args({ name: 'id', type: () => String }) id?: string): types.User[] {
        return this.appService.getUsers(id);
    }

    @Mutation(() => types.User, { name: 'user' })
    user(@Context() ctx: any, ): types.User {
        const user = ctx.req.userRecord as types.User;
        return this.appService.updateUser();
    }
}
