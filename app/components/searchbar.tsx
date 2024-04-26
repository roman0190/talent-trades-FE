"use client"
import React, { useState } from 'react';
import axios from 'axios';



export default function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false); 
   

  const handleChange = (e:any) => {
    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/admin/search/${inputValue}`);
      setSearchResult(response.data);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter something"
      />
      <button onClick={handleClick}>Submit</button>
      {searchPerformed && !searchResult && <p>No user found id {inputValue}</p>}
      {searchPerformed && searchResult && (
        <div>
          <h2>Search Result:</h2>
          <p>ID: {searchResult?.id}</p>
          <p>Name: {searchResult?.name}</p>
          <p>Email: {searchResult?.email}</p>
          <p>Number: {searchResult?.number}</p>
          <p>Role: {searchResult?.role}</p>
          <img src={`http://localhost:4000/admin/profilePic/${searchResult?.path}`} alt="No image found" className="mt-4 w-24 h-24" />
        </div>
      )}
    </div>
  );
}


