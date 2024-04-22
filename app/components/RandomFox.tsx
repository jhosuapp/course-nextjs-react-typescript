import { useEffect, useRef, useState } from "react"; 
interface Props {
    image: string;
    alt: string;
}

//Type explicit
const RandomFox = ( { image, alt } : Props ):JSX.Element =>{
    //State
    const [renderImage, setRenderImage] = useState<string>(
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
    );
    //Node
    const node = useRef<HTMLImageElement>(null);
    useEffect(()=>{
        //Obsever
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setRenderImage(image);
                }
            })
        });

        node.current && observer.observe(node.current);

        return ()=>{
            observer.disconnect();
        }
    }, [image]);

    return (
        <img ref={ node } className="bg-gray-300" width={'100%'} src={ renderImage } alt={ alt } />
    )
}


export { RandomFox }