import { createContext } from 'react';

export interface User {
    name: string;
}

export interface IUserContext {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<IUserContext>({
    user: null,
    setUser: () => {},
});

export default UserContext;
