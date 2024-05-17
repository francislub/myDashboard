'use client'

import { useRef, useState } from 'react';
import PhotoCard from './PhotoCard'; // Might not be needed here
import ButtonSubmit from './ButtonSubmit';
import styles from '../app/ui/dashboard/products/addProduct/addProduct.module.css';
import { uploadPhoto } from '../actions/UploadActions';

const UploadForm = () => {
  const formRef = useRef();
  const [imageFile, setImageFile] = useState(null); // Store a single image file

  async function handleInputFiles(e) {
    const files = e.target.files;

    // Validate for single file selection
    if (files.length > 1) {
      alert('Only one image file can be uploaded.');
      return;
    }

    const newFile = files[0]; // Get the first selected file

    if (!newFile) return; // Handle no file selection

    if (newFile.size > 1024 * 1024) {
      alert('Image size must be less than 1MB.');
      return;
    }

    if (!newFile.type.startsWith('image/')) {
      alert('Only image files are allowed.');
      return;
    }

    setImageFile(newFile); // Set the selected image file
  }

  async function handleUpload(event) {
    event.preventDefault();

    if (!imageFile) return alert('Please select an image file.');

    const formData = new FormData();

    formData.append('title', document.querySelector('input[name="title"]').value);
    formData.append('category', document.querySelector('select[name="cat"]').value);
    formData.append('desc', document.querySelector('textarea[name="desc"]').value);
    formData.append('price', document.querySelector('input[name="price"]').value);
    formData.append('stock', document.querySelector('input[name="stock"]').value);
    formData.append('color', document.querySelector('input[name="color"]').value);
    formData.append('size', document.querySelector('input[name="size"]').value);

    // Read image data using FileReader
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = async (event) => {
      const imageData = event.target.result; // Base64 encoded image data
      formData.append('image', imageData); // Add image data to FormData
      await uploadPhoto(formData); // Call function to save to MongoDB
    };
  }

  return (
    <div className={styles.container}>
      <form action={handleUpload} ref={formRef} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <div style={{ background: '#ddd', minHeight: 200, margin: '10px 0', padding: 10 }}>
          <input type="file" accept="image/*" onChange={handleInputFiles} />
          <h5 style={{ color: 'red' }}>
            (*) Only accept image file less than 1mb in size. Upto 1 photo file
          </h5>

          {/* Removed preview section as it's not necessary for single image handling */}
        </div>

        <ButtonSubmit value="Upload Product" />
      </form>
    </div>
  );
};

export default UploadForm;
