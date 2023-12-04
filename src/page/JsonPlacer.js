// JsonPlacer.js
import React from "react";
import {Link} from "react-router-dom"
import "../Styles/JsonPlacer.css";
import Navbar from "./Navbar";

export default function JsonPlaceholder() {
  return (
    <>
      <Navbar />
      <div className="json-placer">
        <header>
          <h1>
            <span className="highlight">{"JSON"}</span>Placeholder
          </h1>
          <p>Free fake API for testing and prototyping.</p>
        </header>

        <section className="sponsors">
          <h2>Sponsors</h2>
          <p>
            JSONPlaceholder is supported by the following companies and sponsors
            on GitHub. Check them out 💖
          </p>
        </section>

        <section className="when-to-use">
          <h2>When to Use</h2>
          <p>
            JSONPlaceholder is a free online REST API that provides fake data
            for testing and prototyping. You can use it in various scenarios,
            such as in a README on GitHub, for a demo on CodeSandbox, in code
            examples on Stack Overflow, or simply to test things locally.
          </p>
        </section>

        <section className="resources">
          <h2>Resources</h2>
          <p>JSONPlaceholder comes with a set of 6 common resources:</p>
          <ul>
            <li>/posts - 100 posts</li>
            <li>/comments - 500 comments</li>
            <li>/albums - 100 albums</li>
            <li>/photos - 5000 photos</li>
            <li>/todos - 200 todos</li>
            <li>/users - 10 users</li>
          </ul>
          <p>
            Note: Resources have relations. For example, posts have many
            comments, albums have many photos, etc. See the guide for the full
            list.
          </p>
        </section>

        <section className="routes">
          <h2>Routes</h2>
          <p>
            All HTTP methods are supported. You can use HTTP or HTTPS for your
            requests.
          </p>
          <ul>
            <Link to="http://localhost:1337/jsonplaceholder/posts"><li>GET /posts</li></Link>
            <Link to="http://localhost:1337/jsonplaceholder/posts/1"><li>GET /posts/1</li></Link>
            <li>GET /posts/1/comments</li>
            <li>GET /comments?postId=1</li>
            <li>POST /posts</li>
            <li>PUT /posts/1</li>
            <li>PATCH /posts/1</li>
            <li>DELETE /posts/1</li>
          </ul>
          <p>Note: See the guide for usage examples.</p>
        </section>
      </div>
    </>
  );
}