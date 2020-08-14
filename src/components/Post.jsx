import React from "react";
import "./Post.scss";

export default function Post({ post }) {
  return (
    <div className="post--container">
      <div className="post--header">
        <div className="profile-container">
          <img className="profile-picture" src={post.profilePictureUrl} />
        </div>
        <div className="name-container">
          <h3 className="name">{post.name}</h3>
          <div className="date-container">
            <p className="date">{post.datePosted.toISOString()}</p>
            <button>G</button>
          </div>
        </div>
        <div className="actions-container">
          <div>
            <button>...</button>
          </div>
        </div>
      </div>
      <div className="post--body">
        <span />
      </div>
      <div className="post--actions">
        <span />
      </div>
      <div className="post--footer">
        <span />
      </div>
    </div>
  );
}
