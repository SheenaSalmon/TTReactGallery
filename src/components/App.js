import React,{Component} from 'react';
import Nav from './Nav';
import Search from './Search';
import Photos from './Photos';
import {Provider} from './Context';

import axios from 'axios';
import apiKey from '../config'



class App extends Component{
 state={
   photos:[]
 }

 componentDidMount()
 {
   this.getPhotos();

 }
  apiK=apiKey
 method="flickr.photos.search";

 getPhotos =(q="cats")=> {
  axios.get(`https://api.flickr.com/services/rest?method=${this.method}&api_key=${this.apiK}&text=${q}&format=json&nojsoncallback=1`)
  .then(response => {
   this.setState({photos:response.data.photos.photo});
    //console.log(response.data.photos.photo);
    console.log(this.state.photos);
  }
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    )
 }

  render()
  {
    return <Provider value ={ {photos:this.state.photos}}>
      <div className="container">
      <Search searchForm={this.getPhotos}/>
    
    <Nav />
    <Photos photos={this.state.photos}/>

    </div>
    </Provider>
  }


}

export default App;
