import { db } from "../../db";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";

export const getAllUsers = async () => {
  return db.query.users.findMany();
};

export const getUserByUsername = async (username: string) => {
  return db.query.users.findFirst({ where: eq(users.username, username) });
};

export const getUserByUsernameWithBlogs = async (userename: string) => {
  return db.query.users.findFirst({
    where: eq(users.username, userename),
    with: { blogs: true },
  });
}
