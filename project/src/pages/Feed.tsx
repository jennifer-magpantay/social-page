import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import { Post } from "../components/Post";

export const Feed = () => {
  return (
    <>
      <Header />
      <div className="container--flex">
        <Profile />
        <Post />
      </div>
      <Footer />
    </>
  );
};
