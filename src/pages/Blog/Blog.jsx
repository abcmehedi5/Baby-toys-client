import React from "react";
import useTitle from "../../CustomHook/useTitle";
const Blog = () => {
  useTitle("blog");
  const ref = React.createRef();
  return (
    <div className="container mb-5">
      {/* -------------------react to pdf------------------- */}

      <h4 className="text-center mb-5 mt-5 fw-bold">QNA</h4>
      <div className="mb-3 text-white"></div>
      <div ref={ref} className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              An access token is a short-lived token that is used to
              authenticate the user and grant them access to protected
              resources. Access tokens are typically issued by an authorization
              server and are valid for a limited period of time. A refresh token
              is a long-lived token that can be used to obtain a new access
              token when the old access token expires. Refresh tokens are
              typically issued by an authorization server and are valid for a
              longer period of time than access tokens.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Compare SQL and NoSQL databases?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              SQL and NoSQL are two different types of databases. SQL databases
              are relational databases, while NoSQL databases are non-relational
              databases.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is express js? What is Nest JS ?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Express and NestJS are both frameworks for building web
              applications using Node.js. Express is a lightweight framework
              that provides a minimal API for routing and serving static files.
              NestJS is a more comprehensive framework that provides a wider
              range of features, including dependency injection, routing, and
              templating.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFoure">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFoure"
              aria-expanded="false"
              aria-controls="collapseFoure"
            >
              What is MongoDB aggregate and how does it work
            </button>
          </h2>
          <div
            id="collapseFoure"
            className="accordion-collapse collapse"
            aria-labelledby="headingFoure"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The MongoDB aggregation framework is a powerful data processing
              tool that operates on a pipeline-based approach. It allows you to
              perform advanced operations like filtering, grouping, sorting, and
              more on data stored in MongoDB. It processes data through a series
              of stages, where the output of one stage serves as the input for
              the next stage. This enables you to perform complex data analysis
              and transformation tasks efficiently.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
