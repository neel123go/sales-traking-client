import React from 'react';

const Blogs = () => {
    return (
        <div className='min-vh-100 container'>
            <h2 className='my-5'>Questions Answer</h2>
            <div className='text-start pt-4'>
                <h2>What is the difference between javascript and nodejs?</h2>
                <p className='mt-3'>Javascript is a client-side scripting language. On the other hand, Nodejs provides an environment to execute Javascript on the server-side. Javascript can only be run in the browsers. On the other hand, we can run javascript outside of the browser with the help of Nodejs. Javascript is used on the client-side. But Nodejs is mostly used on the server-side. Javascript is capable enough to add HTML tags. But Nodejs does not have the capability to add HTML tags.</p>
                <h2 className='mt-5'>When should you use nodejs and when should you use mongodb?</h2>
                <p className='mt-3'>Nodejs is an asynchronous event-driven JavaScript runtime built on Chrome's V8 JavaScript engine. I will use Nodejs when I will build a scalable network application, data streaming application, or real-time chat application. MongoDB is a source-available cross-platform document-oriented database program. MongoDB’s document model is simple to learn and use. I will use MongoDB when I will build applications that are more future-proof with its scaling capabilities and flexible schema. I will also use it to store structured or unstructured data.</p>
                <h2 className='mt-5'>What is the differences between SQL and NoSQL databases?</h2>
                <p className='mt-3'>SQL databases are primarily called as Relational Databases (RDBMS). On the opposite hand, NoSQL databases are primarily called Non-relational or distributed databases. SQL databases are table-based databases. But NoSQL databases are document-based, key-value pairs, and graph databases. SQL databases are vertically scalable. On the opposite hand, NoSQL databases are horizontally scalable. Some examples of SQL databases are Oracle, Postgres, etc. Some examples of NoSQL databases are MongoDB, Redis, etc.</p>
            </div>
        </div>
    );
};

export default Blogs;