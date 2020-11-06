import React, { useEffect, useState } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import Consumer from './Context';

const Photos =(props)=>
{ 
    
    // const [newphotos, setNewPhotos]=useState();
    
    // setNewPhotos(props.photos);
    // console.log(newphotos);
    
   let photos=props.photos.map( (photo) => {
            // console.log(photo.id);
            const url =`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        //    console.log(url);
        //    console.log(photo['server']);
       return(
        <Photo key ={photo.id} src={url} alt={photo.title} />) 
        }
        
        );

    // console.log(props.photos);
    

    return(
    
    <div className="photo-container">
  
    <ul>
        { photos.length > 0? photos : <NotFound />} 
        
    </ul>
    </div>
            )

    


}

export default Photos;

