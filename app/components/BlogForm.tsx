import { createBlogAction } from "@/app/actions/blogActions";

const BlogForm = () => {
  return (
    <form action={createBlogAction}>
      <div>
        <label>Title: </label>
        <input type="text" name="title" />
      </div>
      <div>
        <label>Author: </label>
        <input type="text" name="author" />
      </div>
      <div>
        <label>Url: </label>
        <input type="text" name="url" />
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default BlogForm;
