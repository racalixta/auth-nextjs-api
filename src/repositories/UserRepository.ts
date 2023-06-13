import { hash } from "bcrypt";
import prisma from "../database";
import { IUserCreate } from "../interfaces/IUserCreate";
import { User } from "@prisma/client";

class UserRepository implements IUserCreate {
  public async create(name: string, email: string, password:string): Promise<User> {
    let userExists = await prisma.user.findFirst({
      where: { email }
    });

    if(userExists) {
      throw new Error("Erro: usuário já existe");
    }

    const HashPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: HashPassword
      }
    });

    return user;
  }
}

export { UserRepository }