import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            path: '/api',
            context: ({ req }) => ({ headers: req.headers }),
            typePaths: ['src/**/*.graphql']
        })
    ],
    controllers: [AppController],
    providers: [AppResolver, AppService]
})
export class AppModule {}
