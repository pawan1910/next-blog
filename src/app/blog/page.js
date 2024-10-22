import React from 'react'
import PostCard from "@/app/components/postCard/postCard";
import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    // alert =("Something went wrong");
    console.log("Something went wrong");
  }

  return res.json();
};

const blog = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default blog