import React, { useState } from "react";
import blogData from "./blogData";

const BlogList = ({ blogs }) => {
  const [expandedBlogs, setExpandedBlogs] = useState({});

  const toggleReadMore = (id) => {
    setExpandedBlogs((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Blogs
      </h1>

      {/* Category Filter */}
      <div className="mb-6 text-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Fitness Tips">Fitness Tips</option>
          <option value="Workouts">Workouts</option>
          <option value="Healthy Eating">Healthy Eating</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData
          .filter((blog) =>
            selectedCategory === "All"
              ? true
              : blog.category === selectedCategory
          )
          .map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
            <div>
              <p className="text-gray-600 mt-4">
                {expandedBlogs[blog.id] ? blog.content : `${blog.content.substring(0, 100)}...`}
              </p>
              <button onClick={() => toggleReadMore(blog.id)} className="text-blue-500">
                {expandedBlogs[blog.id] ? 'Read Less' : 'Read More'}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
              By {blog.author} | {blog.category}
            </p>
          </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
