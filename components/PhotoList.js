'use client'
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
    async function handleDeletePhoto(public_id){
        await deletePhoto(public_id)
    }
    return (
        <div  style={{display: 'flex', gap: 10, flexWrap: 'wrap', margin: '10px 0'}}>
            {
                photos.map(photo => (
                    <PhotoCard key={photo?.public_id} url={photo?.secure_url} 
                    onClick={() => handleDeletePhoto(photo?.public_id)}/>
                ))
            }
        </div>
    )
}

export default PhotoList;

