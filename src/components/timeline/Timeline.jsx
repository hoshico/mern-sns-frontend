import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import "./TimeLine.css";
import axios from "axios";

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/posts/timeline/62bfc41f5c596d1a4d033b0e');
      setPosts(response.data);
    };
    fetchPosts();
  },[]);
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
      </div>
    </div>
  )
}
