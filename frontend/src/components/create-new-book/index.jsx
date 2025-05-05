import axios from 'axios';
import React, { useState } from 'react'

const CreateBook = () => {
    
    const [name,setName] = useState('');
    const [author,setAuthor] = useState('');
    const [price,setPrice] = useState('');
    const [pages,setPages] = useState('');
    const [genre,setGenre] = useState('');
    const [year,setYear] = useState('');
      const [message, setMessage] = useState("");

    const createBooks =async ()=> {
    try {
        const response = await axios.post('https://mern-eval.onrender.com/add', {
          name,
          author,
          price,
          pages,
          genre,
          year
        });

        setMessage("book created.");


    } catch(err) {
        console.log(err);
        setMessage("creation failed " + (error.response?.data?.message || error.message));
    }
}
  return (
    <div>
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sign Up Page</h1>

     
  
    

      
      <input
        type="text"
        placeholder="Enter title"
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter author"
        className="border p-2 rounded"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter price"
        className="border p-2 rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter pages"
        className="border p-2 rounded"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter genre"
        className="border p-2 rounded"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter  year"
        className="border p-2 rounded"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

<button>
<button
        onClick={createBooks}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        create
      </button>
</button>
      </div>
      
      {message && <p>{message}</p>}
    </div>
  )
}

export default CreateBook