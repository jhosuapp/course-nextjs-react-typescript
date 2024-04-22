"use client";
//Types
import type { MouseEventHandler } from "react";
//Components
import { useState } from "react";
import { LazyImage } from "./components/LazyImage";
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

    //This functions ejecute when imagen load
    const onLazyLoadImage = ()=>{
        console.log('Imagen cargada correctamente');
    }

    return (
        <>
            <button onClick={ handleClick }>Add fox</button>
            {images.map(({ id, url })=>(
                <div key={ id }>
                    {<LazyImage 
                        src={ url } 
                        className="bg-gray-300" 
                        width={'300px'} 
                        height={'auto'}
                        onClick={ ()=>{ console.log('click !!') } }  
                        onLazyLoad={ onLazyLoadImage }
                    />} 
                </div>
            ))}
        </>
    );
}
