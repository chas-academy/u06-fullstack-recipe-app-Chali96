import { User } from "./user";

export interface Registereduser {
    user: User | undefined;
    registeredState: boolean;
}
