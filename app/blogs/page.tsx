import { getAllBlogs } from "../services/blogService";

const Blogs = () => {
  const blogs = getAllBlogs();

  return (
    <div>
      <h1>Bloglist</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2><strong>{blog.title}</strong></h2>
            <p>Author: {blog.author}</p>
            <p>Url: {blog.url}</p>
            <p>Likes: {blog.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
