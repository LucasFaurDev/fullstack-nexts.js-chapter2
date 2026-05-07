import { getBlogById } from "@/app/services/blogService";

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = getBlogById(Number(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <section>
      <h1>{blog.title}</h1>
      <p>Author: {blog.author}</p>
      <p>
        Url:{" "}
        <a href={blog.url} target="_blank">
          {blog.url}
        </a>
      </p>
      <p>Likes: {blog.likes}</p>
    </section>
  );
};

export default Blog;
