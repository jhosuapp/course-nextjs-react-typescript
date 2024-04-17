//Dinamic
const randomNumber = ():number => Math.floor(Math.random() * 123) + 1;

//Type explicit
const RandomFox = ():JSX.Element =>{
    const source = `https://randomfox.ca/images/${randomNumber()}.jpg`;

    return (
        <img width={'100%'} src={ source } />
    )
}


export { RandomFox }