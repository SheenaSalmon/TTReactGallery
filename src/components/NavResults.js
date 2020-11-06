import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

const NavResults =(props) =>
{
    // const [query,setquery]=useState();

    // setquery(match.params.query);

    // useEffect(()=>{
    //     props.search(query);
    // },[query])
    let { query} = useParams();
       return ( <React.Fragment> { props.search(query)}  </React.Fragment>  )

    
}

export default NavResults;



 