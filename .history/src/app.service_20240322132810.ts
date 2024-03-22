import { Injectable } from '@nestjs/common';
import * as types from './types';

const dummy: types.User[] = [
    {
        id: '1',
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: '2',
        name: 'Jong suk',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '3',
        name: 'Sun joo',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];

@Injectable()
export class AppService {
    getUsers(id?: string): types.User[] {
        return id ? dummy.filter((user) => user.id === id) : dummy;
    }

    updateUser(id: string, description: string): types.User {
        const user = dummy.find((user) => user.id === id);
        user.description = description;
        return user;
    }
}
