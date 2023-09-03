import sql from "@/server/db";
import { BaseModel } from "./BaseModel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";

type UserModelProperties = {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
};

class User extends BaseModel<UserModelProperties> {
  constructor() {
    super("User");
  }

  async getCurrentUser(): Promise<boolean | UserModelProperties>{
    const userCreds = await getServerSession(authOptions);

    if(userCreds && userCreds.user && userCreds.user.email) {
      return this.getByEmail(userCreds.user.email);
    }

    return false;
  }

  async getByNameOrEmail(nameOrEmail: string) {
    const user = await this.getByName(nameOrEmail) || await this.getByEmail(nameOrEmail);

    return user;
  }

  async getByEmail(email: string) {
    const [user] = await sql`
      SELECT * FROM ${ sql(this.modelName) }
      WHERE email = ${ email }
    ` as unknown as [UserModelProperties];

    return user ;
  }

  async getByName(nameOrEmail: string) {
    const [user] = await sql`
      SELECT * FROM ${ sql(this.modelName) }
      WHERE name = ${ nameOrEmail }
    ` as unknown as [UserModelProperties];

    return user ;
  }
}

const UserModel = new User();

export default UserModel;
