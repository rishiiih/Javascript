function fetchPostData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched")
    }, 2000);
  })
}

function fetchCommentData(){
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched")
    }, 3000);
  });
}

async function getBlogData(){
  try {
    console.log("Fetching blog data");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData(),
    ]);
    console.log(blogData);
    console.log(commentData);
    
    
  } catch (error) {
    console.error("Error fetching blog data", error);
    
  }
}

getBlogData();