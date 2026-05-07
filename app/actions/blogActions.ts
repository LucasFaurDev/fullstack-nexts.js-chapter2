"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createBlog, likeBlog } from "../services/blogService";
import { BlogDto } from "../interfaces/blogDto";

export const createBlogAction = async (fromData: FormData) => {
  const blogDto: BlogDto = {
    title: fromData.get("title") as string,
    author: fromData.get("author") as string,
    url: fromData.get("url") as string,
  };
  createBlog(blogDto);

  revalidatePath("/blogs");
  redirect("/blogs");
};

export const likeBlogAction = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  likeBlog(id);

  revalidatePath(`/blogs/${id}`);
};
