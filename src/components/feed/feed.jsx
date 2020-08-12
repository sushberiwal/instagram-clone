import React from "react";
import Post from "../post/post";
import posts from "../../data/posts";
// import postLikerMap from "../../data/post_liker_map";

const Feed = () => {
  return (
    <div>
      {posts.map((post) => {
        const {
          id,
          user_id,
          description,
          is_image,
          image_url,
          video_url,
        } = post;

        return (
          <Post
            key={id}
            postId={id}
            userId={user_id}
            description={description}
            isImage={is_image}
            // isLiked={ liked.length ? true : false  }
            imageUrl={image_url}
            videoUrl={video_url}
          />
        );
      })}
    </div>
  );
};

export default Feed;
