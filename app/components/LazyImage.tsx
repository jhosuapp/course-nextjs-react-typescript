import { useEffect, useRef, useState } from "react"; 
import type { ImgHTMLAttributes } from "react";
//Props
type CustomProps = { src: string }
type NativeProps = ImgHTMLAttributes<HTMLImageElement>;
type Props = CustomProps & NativeProps;

//Type explicit
const LazyImage = ( { src, ...imgProps } : Props ):JSX.Element =>{
    //State
    const [currentSrc, setCurrentSrc] = useState<string>(
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
    );
    //Node
    const node = useRef<HTMLImageElement>(null);
    useEffect(()=>{
        //Obsever
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setCurrentSrc(src);
                }
            })
        });

        node.current && observer.observe(node.current);

        return ()=>{
            observer.disconnect();
        }
    }, [src]);

    return (
        <img ref={ node } src={ currentSrc } { ...imgProps } />
    )
}


export { LazyImage }