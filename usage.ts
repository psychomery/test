import {
  fetchPosts,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} from "./code";

async function tryUsage() {
try {
  //fetchPosts
  const posts = await fetchPosts();
  console.log('Fetched Posts: ', posts);

  //createPost
  const newPost = {
    name: 'Maria Kacprzak',
    email: 'maria.kacprzak@example.com',
    body: 'Hello, this is the new post!',
  };

  const createdPost = await createPost(newPost);
  console.log('Created Post: ', createdPost);

  //updatePost
  const updatePostId = 1;
  const updatedPostData = {
    name: '(updated) Maria Kacprzak',
  };

  const updatedPost = await updatePost(updatePostId, updatedPostData);
  console.log('Updated Post: ', updatedPost);

  //patchPost
  const patchPostId = 1; 
  const patchedFields = {
   body: 'This is my new body!',
  };

  const patchedPost = await patchPost(patchPostId, patchedFields);
  console.log('Patched Post: ', patchedPost);

  //deletePost
  const deletePostId = 1;
  await deletePost(deletePostId);
  console.log('Post deleted');

}
}

//calling the function
tryUsage();