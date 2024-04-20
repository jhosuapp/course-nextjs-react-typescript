"use client";
//Types
import type { MouseEventHandler } from "react";
//Components
import { useState } from "react";
import { RandomFox } from "./components/RandomFox";
//Dinamic
const randomNumber = ():number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
    //Custom type
    type imageItem = { id:number, url:string };
    //State
    const [images, setImages] = useState<Array<imageItem>>([]);
    const [counter, setCounter] = useState<number>(0);

    const handleClick:MouseEventHandler<HTMLButtonElement> = (event):void=>{
        //Prevent
        event.preventDefault();
        //Generate image
        const generateImage = {"id": counter, "url": `https://randomfox.ca/images/${randomNumber()}.jpg`,};
        //SetCounter
        setCounter(counter + 1);
        //SetImage
        setImages([...images, generateImage ]);
    }

    return (
        <>
            <button onClick={ handleClick }>Add fox</button>
            {images.map(({ id, url })=>(
                <div key={ id }>
                    {<RandomFox image={ url } alt={ 'Zorro' } />} 
                </div>
            ))}
        </>
    );
}
