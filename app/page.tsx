"use client";

//Components
import { useState } from "react";
import { RandomFox } from "./components/RandomFox";
//Dinamic
const randomNumber = ():number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
    //Custom type
    type imageItem = { id:string, url:string };
    //State
    const [images, setImages] = useState<Array<imageItem>>([
        {"id": "1", "url": `https://randomfox.ca/images/${randomNumber()}.jpg`,},
        {"id": "2", "url": `https://randomfox.ca/images/${randomNumber()}.jpg`,},
        {"id": "3", "url": `https://randomfox.ca/images/${randomNumber()}.jpg`,},
        {"id": "4", "url": `https://randomfox.ca/images/${randomNumber()}.jpg`,}
    ]);

    return (
        <>
            {images.map(({ id, url })=>(
                <div key={ id }>
                    {<RandomFox image={ url } alt={ 'Zorro' } />} 
                </div>
            ))}
        </>
    );
}
