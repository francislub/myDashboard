'use client'

import React, { useState } from 'react';
import upload from '../../api/upload' // Import Multer configuration
import Photo from '../../lib/models';

const ImageUploadForm = () => {
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image', selectedFile);

      const runMiddleware = promisify(upload.single('image'));

      await runMiddleware(req, res);

      const { filename } = req; // Get filename from Multer
      console.log('File uploaded successfully', filename)
      const imageUrl = `/uploads/${filename}`; // Construct image URL path

      const newPhoto = new Photo({ title, imageUrl });
      await newPhoto.save();

      console.log('Image uploaded successfully!', newPhoto);
      // Handle successful upload (e.g., show a success message, clear form)
      setTitle('');
      setSelectedFile(null);
    } catch (error) {
      console.error(error);
      // Handle general errors
    }
  };

  return (
    <div className='mt-5'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input className='mx-4 my-3 text-black' type="text" id="title" onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <label htmlFor="image">Image:</label>
        <input className='mx-2' type="file" id="image" accept="image/*" onChange={(e) => setSelectedFile(e.target.files[0])} />
        <br />
        <button className='my-4 bg-[#008080] py-1 px-4 rounded cursor-pointer' type="submit">Upload</button>
      </form>
    </div>
    
  );
};

export default ImageUploadForm;
