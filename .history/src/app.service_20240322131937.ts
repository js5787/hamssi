import { Injectable } from '@nestjs/common';
import * as types from './types';

@Injectable()
export class AppService {
    getUsers(): types.User[] {
        return [
            {
                id: '1',
                name: 'John Doe'
            },
            {
                id: '2',
                name: 'Jong suk'
            },
            {
                id: '3',
                name: 'Sun joo'
            }
        ];
    }

    updateUser(): types.User {
        return {
            id: '1',
            name: 'John Doe'
        };
    }
}
