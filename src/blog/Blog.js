import React from "react";
import BlogPost from "./BlogPost";
import "./Blog.css";
import { Post_01, Post_02, Post_03, Post_04, Post_05, Post_06, Post_07, Post_08, Post_09, Post_10, Post_11, Post_12 } from "./Blog_Data";
import Footer from "../footer/Footer";

export default function Blog() {
  return (
    <>
    <section className="blogpage">
      <div className="blog">
        <BlogPost {...Post_12} />
        <BlogPost {...Post_11} />
        <BlogPost {...Post_10} />
        </div>
        <div className="blog">
        <BlogPost {...Post_09} />
        <BlogPost {...Post_08} />
        <BlogPost {...Post_07} />
        </div>
        <div className="blog">
        <BlogPost {...Post_06} />
        <BlogPost {...Post_05} />
        <BlogPost {...Post_04} />
        </div>
        <div className="blog">
        <BlogPost {...Post_03} />
        <BlogPost {...Post_02} />
        <BlogPost {...Post_01} />
        </div>
    </section>
    <Footer />
    </>
  );
}
