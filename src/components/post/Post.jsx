import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Post.css";
import { format } from "timeago.js";

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // useStateの初期値でpost.like(いいねの数)をセット
  const [like, setLike] = useState(post.likes.length);
  // likeを既に押しているかのフラグ
  const [isLiked, setIsliked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  },[]);

  const handleLike = () => {
    /*
      isLiked(いいねを押したかどうか)は初期値はfalse
      クリックでset関数で更新

      like(いいねの数)は初期値はpost.like
      クリックで"isLiked"がtrue(ずでに押している)なら -1
      いいねしていなければ +1 する
    */
    setLike(isLiked ? like - 1 : like + 1);
    setIsliked(!isLiked);
  };
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user.profilePicture || `${PUBLIC_FOLDER}/person/noAvatar.png`} alt="" className='postProfileImg' />
            <span className='postUsername'>{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={`${PUBLIC_FOLDER}${post.img}`} alt="" className='postImg' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={`${PUBLIC_FOLDER}/heart.png`}  alt="" className='likeIcon' onClick={() => handleLike()}/>
            <span className="postLikeCounter">{like}人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}
