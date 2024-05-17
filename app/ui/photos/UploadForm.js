'use client'

import { useRef, useState } from 'react';
import PhotoCard from './PhotoCard';
import ButtonSubmit from './ButtonSubmit';
import { revalidate, uploadPhoto } from '../../../actions/UploadActions';

const UploadForm = () => {
    const formRef = useRef();
    const [files, setFiles] = useState([])

    async function handleInputFiles(e) {
        const files = e.target.files;
        
        const newFiles = [...files].filter(file => {
            if (file.size < 1024*1024 && file.type.startswith('image/')) {
                return file;
            }
        })

        setFiles(prev => [...newFiles, ...prev])
    }

    async function handleUpload() {
        if(!files.length) return alert("No image files are selected")
        if(files.length > 3) return alert("Upload upto 3 images")

        const formData = new FormData();

        files.forEach(file => {
            formData.append('files', file)
        })

        const res = await uploadPhoto(formData)
        // if(res?.msg) alert(`Success: ${res?.msg}`) // <==> await delay(200)
        if(res?.errMsg) alert(`Error: ${res?.errMsg}`)

        setFiles([])
        formRef.current.reset()
        // wait about 2s to update cloudinary database
        // revalidate('/dashboard/products')
    }

    return (
        <form action={handleUpload} ref={formRef}>

        <div style={{background: '#ddd', minHeight: 200, margin: '10px 0', padding:10}}>
            <input type='file' accept='image/*' multiple onChange={handleInputFiles}/>
            <h5 style={{color: 'red'}}>
                (*) Only accept image file less than 1mb in size. Upto 3 photo files
            </h5>

            {/* Preview Images */}
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', margin: '10px 0'}}>
                {
                    files.map((file, index) => (
                        <PhotoCard key={index} url={URL.createObjectURL(file)}/>
                    ))
                }
            </div>
        </div>

        <ButtonSubmit value="Upload to Cloudinary"/>

        </form>
    )
}

export default UploadForm;