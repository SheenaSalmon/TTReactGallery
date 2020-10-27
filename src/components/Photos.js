import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import Consumer from './Context';

const Photos =(props)=>
{ 
    
    
       const photos= props.photos.map( (photo) => {
            console.log(photo.id);
            const url =`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        //    console.log(url);
        //    console.log(photo['server']);
       return(
        <Photo key ={photo.id.toString()} src={url} alt={photo.title} />) 
        }
        
        );


    //console.log(props.photos);
    

    return(
    
    <div className="photo-container">
    <h2>Results</h2>
    <ul>
        { photos.length > 0? photos : <NotFound />} 
        
    </ul>
    </div>
            )

    


}

export default Photos;

