// interfaces
interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

//API url and API routes
const apiUrl = "https://jsonplaceholder.typicode.com";
const getPostRoute = "/posts"; //GET and POST
const updateRoute = "/posts/1"; //PUT, PATCH, DELETE

//GET function
async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${apiUrl}${getPostRoute}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const posts: Post[] = await response.json();
  return posts;
}

//POST function
async function createPost(newPost: Partial<Post>): Promise<Post> {
  const response = await fetch(`${apiUrl}${getPostRoute}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error(`Failed to create post. Status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

//PUT function
async function updatePost(
  postId: number,
  updatedPost: Partial<Post>
): Promise<Post> {
  const response = await fetch(`${apiUrl}${updateRoute}/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });

  if (!response.ok) {
    throw new Error(`Failed to update post. Status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

//PATCH function
async function patchPost(
  postId: number,
  updatedFields: Partial<Post>
): Promise<Post> {
  const response = await fetch(`${apiUrl}${updateRoute}/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });

  if (!response.ok) {
    throw new Error(`Failed to patch the post. Status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

//DELETE function
async function deletePost(postId: number): Promise<void> {
  const response = await fetch(`${apiUrl}${updateRoute}/${postId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete the post. Status: ${response.status}`);
  }
}

//export
export { fetchPosts, createPost, updatePost, patchPost, deletePost, Post };
