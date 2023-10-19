// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { IUserRole } from "@/types/common";
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    role: IUserRole;
    user: User;
  }

  interface User extends DefaultUser {
    role: IUserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: IUserRole;
    userData: any;
  }
}
