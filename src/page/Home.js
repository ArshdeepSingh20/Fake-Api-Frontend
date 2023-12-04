import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to API Explorer</h2>
      <div className="api-grid">
        <div className="api-item">
          <h3 className="api-heading1">JSON Placeholder</h3>
          <p className="api-description">
            Explore the JSON Placeholder API with sample data.
          </p>
          <Link
            to="/jsonplaceholder"
            className="api-link json-placeholder-link"
          >
            Explore JSON Placeholder API
          </Link>
        </div>

        <div className="api-item">
          <h3 className="api-heading1">Mock Fake API</h3>
          <p className="api-description">
            Dive into the Mock Fake API for realistic mock data.
          </p>
          <Link to="/mockfakeapi" className="api-link mock-fake-api-link">
            Explore Mock Fake API
          </Link>
        </div>
        <div className="api-item">
          <h3 className="api-heading1">Free Test API</h3>
          <p className="api-description">
            Access the Free Test API for testing purposes.
          </p>
          <Link to="/freetestapi" className="api-link free-test-api-link">
            Explore Free Test API
          </Link>
        </div>
        <div className="api-item">
          <h3 className="api-heading1">Dummy API</h3>
          <p className="api-description">
            Explore the Dummy API for placeholder information.
          </p>
          <Link to="/dummyapi" className="api-link dummy-api-link">
            Explore Dummy API
          </Link>
        </div>

        <div className="api-item">
          <h3 className="api-heading1">Dinsser Mock API</h3>
          <p className="api-description">
            Explore the Dinsser Mock API for dynamic mock data.
          </p>
          <Link to="/dinssermockapi" className="api-link dinsser-mock-api-link">
            Explore Dinsser Mock API
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
