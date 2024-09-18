"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    const fetchPosts = async () => {
      console.log(1);
      try {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (session?.user.id) fetchPosts();
  }, [session]);

  const handleEdit = (post) => {
    console.log(post);
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure to delete this prompt?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const fileteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(fileteredPosts);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Profile
      name="My"
      desc="Welcome to your Profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
