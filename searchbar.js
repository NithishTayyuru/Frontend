import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    category: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only pass non-empty search parameters
    const filters = Object.fromEntries(
      Object.entries(searchParams).filter(([_, v]) => v !== '')
    );
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded-lg shadow-md">
      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={searchParams.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={searchParams.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={searchParams.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={searchParams.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button 
        type="submit" 
        className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search Events
      </button>
    </form>
  );
};

export default SearchBar;