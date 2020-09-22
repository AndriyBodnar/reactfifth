import React from "react";
import verified from "../assets/img/verified.svg";
import arrow from "../assets/img/arrow.svg";
import comment from "../assets/img/comment.svg";
import repost from "../assets/img/repost.svg";
import like from "../assets/img/like.svg";
import share from "../assets/img/share.svg";

function Post(props) {
  return (
    <div class="post__twitter">
      <div class="user__logo">
        <img src={props.author.photo} alt="userLogo" />
      </div>
      <div class="post__info">
        <div class="content__info">
          <div class="content__info-user">
            <h4>{props.author.name}</h4>
            <img src={verified} alt="verified_icon" class="veryf" />
            <span>{`${props.author.nickname} · ${props.date}`}</span>
            <img src={arrow} alt="arrowIcon" class="arrow-icon" />
          </div>
          <div class="content__info-post">
            <p>{props.content}</p>
          </div>
        </div>
        <div class="content__img">
          <img src={props.image} alt="post_img" />
        </div>
        <nav class="actions__nav">
          <div class="action">
            <img src={like} alt="action_icon"></img>
            <span>{props.likecount}</span>
          </div>
          <div class="action">
            <img src={repost} alt="action_icon"></img>
            <span>{props.repcount}</span>
          </div>
          <div class="action">
            <img src={comment} alt="action_icon"></img>
            <span>{props.actioncount}</span>
          </div>
          <div class="action">
            <img src={share} alt="action_icon"></img>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Post;
