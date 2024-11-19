import { User } from "../user/UserTypes";

export interface Book{
    _id: string;
    title: string;
    author: User;
    genre: string;
    coverImage: string;
    file: string;
    createdAt: Date;
    updatedAt: Date;
}

export default Book