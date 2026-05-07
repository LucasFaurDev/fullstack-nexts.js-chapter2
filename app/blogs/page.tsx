import Link from "next/link";
import { getAllBlogs } from "../services/blogService";

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;

  const blogs = getAllBlogs();
  const filterBlogs = filter
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(filter.toLowerCase()),
      )
    : blogs;
  const sortedBlogs = [...filterBlogs].sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h1>Bloglist</h1>
      <form method="GET">
        <input type="text" name="filter" defaultValue={filter}/>
        <button type="submit">Search</button>
      </form>
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
