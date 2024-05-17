import React, { useTransition } from "react";
import Image from "next/image";

const PhotoCard = ({ url, onClick }) => {
    const [isPending, startTransition] = useTransition();

    return (
        <div>
            <div style={{border: '2px solid red', padding: 5}}>
                <Image src={url} alt='image' width={100} height={60} priority/>
            </div>

            <button type="button" onClick={() => startTransition(onClick)} disabled={isPending}>
                { isPending ? 'Loading...' : 'Delete' }
            </button>
        </div>
    )
}

export default PhotoCard;