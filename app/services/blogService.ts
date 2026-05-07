import { Blog } from "../interfaces/blog";
import { BlogDto } from "../interfaces/blogDto";

const blogs: Blog[] = [
  {
    id: 1,
    title: "Things I Don't Know as of 2018",
    author: "Dan Abramov",
    url: "http://overreacted.io/things-i-dont-know-as-of-2018",
    likes: 0,
  },
  {
    id: 2,
    title: "Micriservices and the First Law of Distributed Objects",
    author: "Martin Fowler",
    url: "http://martinfowler.com/articles/distributed-objects-microservices.html",
    likes: 0,
  },
];

export const getAllBlogs = (): Blog[] => {
  return blogs;
};

export const createBlog = (blogDto: BlogDto): Blog => {
  const newBlog: Blog = {
    id: blogs.length + 1,
    title: blogDto.title,
    author: blogDto.author,
    url: blogDto.url,
    likes: 0,
  };

  blogs.push(newBlog);

  return newBlog;
};
