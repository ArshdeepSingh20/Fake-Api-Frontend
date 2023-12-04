import React from "react";
import "../Styles/MockFakeApi.css";
import Navbar from "./Navbar";

export default function MockFakeApi() {
  return (
    <>
      <Navbar />
      <div className="website-container">
        <header>
          <h1>Fake JSON API Website</h1>
        </header>

        <main className="fake-api-container">
          <section className="intro-section">
            <h2>Fake JSON API</h2>
            <p>Access fake APIs with dummy data 🎭</p>
          </section>

          <section className="create-api-section">
            <h3>Create Your Own Fake JSON API</h3>
            <p>
              The editor below allows you to create a fake JSON API with your
              own fake data. Scroll down for ready-to-use examples of different
              fake APIs.
            </p>
          </section>

          <section className="ready-apis-section">
            <h2 className="api-heading">Ready to Use Fake APIs</h2>
            <p className="api-description">
              Below we have created APIs that serve test data for you to use. We
              created them with the form above. If you want to create your own
              API instead of using ours, feel free!
            </p>

            <div className="api-section">
              <h3 className="api-subheading">Users</h3>
              <p className="api-description">
                Users are one of the most fundamental components for a lot of
                apps. Therefore, we will start out by using some endpoints
                providing a fake JSON API for users.
              </p>

              <h4 className="api-subheading">List users</h4>
              <p className="api-description">
                A simple list of users. Call the endpoint we have prepared below
                to get started.
              </p>
            </div>
          </section>

          <section className="mocki-section">
            <h2 className="api-heading">Create Your Own Fake API</h2>
            <p className="api-description">
              If you want to create your own fake API with multiple endpoints,
              dynamic responses, and more advanced features, you can use Mocki.
              We created the tool to make development and testing APIs a lot
              easier.
            </p>

            <p className="api-description">
              If you, for example, wanted to mock the endpoints provided above
              in a single API, it would require the following endpoints:
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
