import React,{Component,PureComponent} from 'react';
import Nav from './Nav';
import Search from './Search';
import Photos from './Photos';

import Home from './Home';
import NavResults from './NavResults';
import {Provider} from './Context';
import {BrowserRouter, Route,NavLink, Switch} from 'react-router-dom'
import axios from 'axios';


import apiKey from '../config'



class App extends PureComponent{
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
    // console.log(this.state.photos);
  }
    )
    .catch(
      (error)=>{
        console.log("You had an error",error);
      }
    )
 }
//  shouldComponentUpdate(nextProps, nextState)
//  {
//   return this.state.photos != nextState.photos;
//  }
 


  render()
  {
    return (
      <div className="container">
        
      
    <Search searchForm={this.getPhotos}/>
    
    <BrowserRouter>
    <Nav />
    
    <Switch>
    <Route exact path="/" render={ () => this.getPhotos("cat")} />
    {console.log("reload")}

    <Route exact path="/cats" render={()=> this.getPhotos("cats") } />

    <Route exact path="/dogs" render={ () => this.getPhotos("dog")}/>
    <Route exact path="/birds" render={ () => this.getPhotos("bird")}/>
    </Switch>
    </BrowserRouter>
    <Photos photos={this.state.photos}/>
    
    </div>)

  }


}

export default App;
