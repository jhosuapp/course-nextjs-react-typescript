import { useRef } from "react"; 
interface Props {
    image: string;
    alt: string;
}

//Type explicit
const RandomFox = ( { image, alt } : Props ):JSX.Element =>{

    const node = useRef<HTMLImageElement>(null);

    return (
        <img ref={ node } width={'100%'} src={ image } alt={ alt } />
    )
}


export { RandomFox }