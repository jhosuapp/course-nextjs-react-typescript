"use client";

//Components
import { useState } from "react";
import { RandomFox } from "./components/RandomFox";
//Dinamic
const randomNumber = ():number => Math.floor(Math.random() * 123) + 1;

export default function Home() {

    const [ images, setImages ] = useState<string[]>([
        `https://randomfox.ca/images/${randomNumber()}.jpg`,
        `https://randomfox.ca/images/${randomNumber()}.jpg`,
        `https://randomfox.ca/images/${randomNumber()}.jpg`,
        `https://randomfox.ca/images/${randomNumber()}.jpg`,
        `https://randomfox.ca/images/${randomNumber()}.jpg`
    ]);

    return (
        <>
            {images.map((image:string, index:number)=>(
                <div key={ index }>
                    {<RandomFox image={ image } alt={ 'Zorro' } />}
                </div>
            ))}
        </>
    );
}
