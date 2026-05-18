"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createBlog, likeBlog } from "../services/blogService";

export const createBlogAction = async (fromData: FormData) => {
  const title = fromData.get("title") as string;
  const author = fromData.get("author") as string;
  const url = fromData.get("url") as string;
  await createBlog(title, author, url);

  revalidatePath("/blogs");
  redirect("/blogs");
};

export const likeBlogAction = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  await likeBlog(id);

  revalidatePath(`/blogs/${id}`);
};
