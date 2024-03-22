import { Injectable } from '@nestjs/common';
import * as types from './types';

@Injectable()
export class AppService {
    getUsers(id?: string): types.User[] {
        const dummy = [
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
        return id ? dummy.filter((user) => user.id === id) : dummy;
    }

    updateUser(): types.User {
        return {
            id: '1',
            name: 'John Doe'
        };
    }
}
