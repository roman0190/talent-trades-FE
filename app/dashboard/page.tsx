import React from 'react'
import axios from 'axios'
import Searchbar from '../components/searchbar';

export default async function Dashboard(props:any) {
    const response = await axios.get ('http://localhost:4000/admin/all');
    const jsondata = response.data ;

  return (
    <>
     <div className=" max-h-screen overflow-y-scroll">
    <h1>Data</h1>
    <Searchbar />
    {jsondata.map((item: any,index: any) => {
    return(
      <div key={index} className="my-1 p-5 border border-gray-300 ">
        <h1 className="text-xl font-semibold">{item.name}</h1>
        <p className="text-gray-600">Email: {item.email}</p>
        <p className="text-gray-600">Joined: {item.date}</p>
        <p className="text-gray-600">Number: {item.number}</p>
        <p className="text-gray-600">Role: {item.role}</p>
        <img src={"http://localhost:4000/admin/profilePic/"+item.path} alt="Image Not Uploaded yet" className="mt-4 w-24 h-24" />
      </div>
    );
  })}
  </div>
    </>
  )
}
