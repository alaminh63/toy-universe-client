import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="md:max-w-[1200px] my-12 mx-auto">
        <div className="text-3xl text-center font-bold pb-10 text-amber-600">
          <h2>Question's Answer....</h2>
        </div>
        <div className="grid gap-8 grid-cols-2">
          <div className="bg-slate-200 p-10 rounded-xl">
            <h2 className="text-xl font-semibold  my-2 text-center text-amber-600">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p className="text-sm text-center">
              Access tokens and refresh tokens are used to authenticate users
              and grant them access to resources. Access Token are short-lived
              and are used to make authenticated requests to a resource server.
              Refresh tokens are longer-lived and can be used to obtain new
              access tokens when the old ones expire. We should store them in
              HTTP only cookie. But we also store them in local storage or
              session storage.
            </p>
          </div>
          <div className="bg-slate-200 p-10 rounded-xl">
            <h2 className="text-xl font-semibold my-2 text-center text-amber-600">
              Compare SQL and NoSQL databases?
            </h2>
            <p className="text-sm text-center">
              SQL Database: SQL Database are relational database that store data
              in tables. Each table has a column and rows. NoSQL Database: NoSQL
              Database are non relational database that store data in a variety
              of formats. Some common NoSQL data models include key-value
              stores, document databases, and graph databases. NoSQL database do
              not use SQL.
            </p>
          </div>
          <div className="bg-slate-200 p-10 rounded-xl">
            <h2 className="text-xl font-semibold my-2 text-center text-amber-600">
              What is express js? What is Nest JS ?
            </h2>
            <p className="text-sm text-center">
              Express.js is a minimalistic and flexible web framework for
              Node.js. It is designed to simplify the process of building web
              applications and APIs. Express.js provides a lightweight and
              unopinionated approach, allowing developers to have more control
              over the structure and components of their applications. It offers
              a set of functionalities and middleware that help with routing,
              handling requests and responses, managing sessions, and
              integrating with databases.
            </p>
          </div>
          <div className="bg-slate-200 p-10 rounded-xl">
            <h2 className="text-xl font-semibold my-2 text-center text-amber-600">
              What is MongoDB aggregate and how does it work ?
            </h2>
            <p className="text-sm text-center">
              MongoDB's aggregation framework is a powerful feature that allows
              you to process and analyze data stored in a MongoDB database. It
              provides a way to perform complex queries, transformations, and
              aggregations on the data in a flexible and efficient manner.The
              aggregation framework in MongoDB provides a flexible and efficient
              way to perform advanced querying, data transformations, and
              aggregations, making it a powerful tool for analyzing and
              manipulating data in a MongoDB database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
