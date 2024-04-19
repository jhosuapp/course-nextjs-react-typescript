interface Props {
    image: string;
    alt: string;
}

// type Props {
//     image: string;
// }

//Type explicit
const RandomFox = ( { image, alt } : Props ):JSX.Element =>{
    return (
        <img width={'100%'} src={ image } alt={ alt } />
    )
}


export { RandomFox }