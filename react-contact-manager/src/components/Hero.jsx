import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div
          className="jumbotron rounded-1 w-sm-75 mx-sm-auto container mt-3 px-1 py-2 py-sm-5 px-sm-4 d-flex flex-column justify-content-center mw-75"
          style={{
            backgroundColor: "#eee",
            maxWidth: "1140px",
          }}
        >
          <p className="h3 font-weight-bold mx-auto mb-3">Contact Manager</p>
          <p className="lead">
            This is a portfolio project to showcase knowledge of:
          </p>
          <ol className="ml-3" type="i">
            <li>React Components and JSX.</li>
            <li>React Router.</li>
            <li>Component state management.</li>
            <li>Context api for global state management.</li>
            <li>
              Making asynchronous calls to the Json placeholder fake rest api
              using "async/await".
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Hero;
