import React from "react";
import Image from "next/image";

const PhotoCard = () => {
    return (
        <div>
            <div style={{border: '2px solid red', padding: 5}}>
                <Image src={url} alt='image' width={100} height={60} priority/>
            </div>
        </div>
    )
}

export default PhotoCard;