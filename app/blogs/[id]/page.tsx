import { getBlogById } from "@/app/services/blogService";
import { likeBlogAction } from "@/app/actions/blogActions";

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

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
      <span>Likes: {blog.likes}</span>
      <form action={likeBlogAction}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like</button>
      </form>
    </section>
  );
};

export default Blog;
