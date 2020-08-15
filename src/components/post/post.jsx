import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./post.css";
import { useEffect } from "react";
import comments from "../../data/comments.js";
import postLikerMap from "../../data/post_liker_map";

const Post = (props) => {
  const postId = props.postId;
  const username = "sushberiwal";
  const caption = props.description + "😍";
  const isImage = props.isImage;
  const imageUrl = isImage ? props.imageUrl : props.videoUrl;

  const [comment, setComment] = useState([]);
  const [cmnt, setCmnt] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    let count = 0;
    postLikerMap.map((like) => {
      if (like.post_id == postId) {
        count++;
      }
    });
    setLikeCount(count);
  });

  useEffect(() => {
    postLikerMap.map((like) => {
      if (like.user_id == 1 && like.post_id == postId) {
        setIsLiked(true);
        return;
      }
    });
  }, [postId]);

  useEffect(() => {
    setComment(
      comments.filter((comment) => {
        return comment.post_id == postId;
      })
    );
  }, [postId]);

  function postComment(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(postId);
    let obj = {
      id: Math.random()+"",
      user_id: "1",
      post_id: postId + "",
      data: cmnt,
    };
    comments.push(obj);
    setComment(
      comments.filter((comment) => {
        return comment.post_id == postId;
      })
    );
    setCmnt("");
  }

  function unLike() {
    // console.log(postId);
    // postLikerMap.filter((like) => {
    //   return like.post_id != postId;
    // });
    let obj = { post_id: postId , user_id:1};
    // let index = postLikerMap.indexOf(obj);
    let index = postLikerMap.findIndex( obj => {
        if(obj){
            return obj.post_id === postId && obj.user_id==1;
        }
    }
        );

    // console.log(index);
    delete postLikerMap[index];
    setIsLiked(false);
    // console.log(postLikerMap.length);    
  }
  function like() {
    let obj = {
      post_id: postId,
      user_id: 1,
    };
    postLikerMap.push(obj);
    setIsLiked(true);
    console.log(postLikerMap.length);
  }
  

  return (
    <div className="post">
      <div className="post__header">
        <Avatar alt="Sushant Beriwal" src={imageUrl} />
        <strong>{username}</strong>
      </div>
      <div className="post__image">
        <img alt="" src={imageUrl}></img>
      </div>
      <div className="post__data">
        <div className="post__activity">
          <div className="post__action">
            {isLiked ? (
              <FontAwesomeIcon
                onClick={unLike}
                icon={["fas", "heart"]}
                size="lg"
                style={{ color: "#ED4956" }}
              />
            ) : (
              <FontAwesomeIcon
                onClick={like}
                icon={["far", "heart"]}
                size="lg"
              />
            )}
          </div>
          <div className="post__action">
            <FontAwesomeIcon icon={["far", "comment"]} size="lg" />
          </div>
        </div>
        {likeCount >= 1 ? <span>{likeCount} likes</span> : <span></span>}
        <p>
          <strong>{username + " "}</strong>
          {caption}
        </p>

        <div className="post__comments">
          <ul>
            {comment.map(function (comment) {
              return (
                <li key={comment.id}>
                  <strong>sushberiwal</strong>
                  {comment.data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="add__comment">
        <input
          className="post__input"
          type="text"
          placeholder="Write a comment"
          value={cmnt}
          onChange={(e) => setCmnt(e.target.value)}
        ></input>
        <Button
          className="post__btn"
          size="small"
          color="primary"
          disabled={!cmnt}
          type="submit"
          onClick={postComment}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default Post;
