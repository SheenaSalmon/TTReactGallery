import React, { useEffect, useState } from 'react';

const NavResults =(props) =>
{
    const [query,setquery]=useState();

    setquery(props.word);

    useEffect(()=>{
        props.search(query);
    },[query])


    
}

export default NavResults;



 