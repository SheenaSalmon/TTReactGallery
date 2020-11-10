import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const Photos =(props)=>
{ 
   
    //iterate over the photos with map and render using the Photo component
   let photos=props.photos.map( (photo) => {
            
            const url =`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      
       return(
           <li key={photo.id}>
        <Photo id ={photo.id} src={url} alt={photo.title} /></li>) 
        }
        
        );

   
    

    return(
    
    <div className="photo-container">
  
    <ul>
        {/* Display the photos, if they are not available display the NotFound component */}
        { photos.length > 0? photos : <NotFound />} 
        
    </ul>
    </div>
            )

    


}

export default Photos;

