import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

const NavResults =(props) =>
{
  
    //Part of the Search Route 
    //A work around that allows the search to be called again when using the back button
    let { query} = useParams();
       return ( <React.Fragment> { props.search(query)}  </React.Fragment>  )

    
}

export default NavResults;



 