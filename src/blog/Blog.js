import React from "react";
import BlogPost from "./BlogPost";
import "./Blog.css";
import { Post_01, Post_02, Post_03, Post_04, Post_05, Post_06 } from "./Blog_Data";
import Footer from "../footer/Footer";

export default function Blog() {
  return (
    <>
    <section className="blogpage">
        <div className="blog">
        <BlogPost {...Post_01} />
        <BlogPost {...Post_02} />
        <BlogPost {...Post_03} />
        </div>
        <div className="blog">
        <BlogPost {...Post_04} />
        <BlogPost {...Post_05} />
        <BlogPost {...Post_06} />
        </div>
    </section>
    <Footer />
    </>
  );
}
