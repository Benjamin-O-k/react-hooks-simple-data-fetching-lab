// create your App component here
import React,{useEffect, useState} from 'react';

export default function App (){
    const [image, setimage] = useState('');

    useEffect(() =>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setimage(data.message))
    })

    if(!image){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <img src={image} alt= "A Random Dog"/>
        </div>
    );
}
