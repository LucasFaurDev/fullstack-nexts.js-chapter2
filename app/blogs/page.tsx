import Link from "next/link";
import { getAllBlogs } from "../services/blogService";

const Blogs = () => {
  const blogs = getAllBlogs();
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <h1>Bloglist</h1>
      <ul>
        {sortedBlogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <p>
                <strong>{blog.title}</strong> by {blog.author}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
