import React from "react";
import "../Styles/Freetestapi.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function FreeTestApi() {
  return (
    <>
      <Navbar />
      <div className="free-test-api-container">
        <header>
          <h1>Welcome to FreeTestAPI</h1>
          <p>
            Empower Your Development Process With 350+ Quality Mock Data & Get
            Access to a Diverse Range of Fake Testing APIs at Completely Free of
            Cost.
          </p>
        </header>

        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>APIs</li>
            <li>Docs</li>
          </ul>
        </nav>

        <section className="api-list">
          <div>
            <h2>Explore APIs</h2>
            <p>Discover a variety of APIs across different categories.</p>
          </div>
          <ul>
            <li>
              {" "}
              <Link to="http://localhost:1337/freeTestApi/airlines" className="airport">
                Airports - 50 objects
              </Link>
            </li>

            <li>
              {" "}
              <Link to="http://localhost:1337/fakestoreapi/products" className="airport">
                Products - 50 objects
              </Link>
            </li>
            <li>Teachers - 35 objects</li>
            <li>Dogs - 40 objects</li>
            <li>Mobiles - 30 objects</li>
            <li>Movies - 20 objects</li>
            <li>Posts - 50 objects</li>
            <li>Us-States - 50 objects</li>
            <li>Countries - 199 objects</li>
            <li>Footballs - 35 objects</li>
            <li>Students - 40 objects</li>
            <li>Politicians - 50 objects</li>
          </ul>
          <button className="show-more-btn">Show More</button>
        </section>
      </div>
    </>
  );
}