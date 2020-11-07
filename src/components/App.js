import React,{Component,PureComponent} from 'react';
import Nav from './Nav';
import Search from './Search';
import Photos from './Photos';


import NavResults from './NavResults';

import {BrowserRouter, Route,NavLink, Switch} from 'react-router-dom'
import axios from 'axios';


import apiKey from '../config'



class App extends PureComponent{
 state={
   photos:[],
   query:"",
   term:"",
   loading:true
 }

  apiK=apiKey;
 method="flickr.photos.search";

 //Fet the photo and add to state, if the argument is not use then use "cat"
 getPhotos =(q="cats")=> {
   let queryNow=`https://api.flickr.com/services/rest?method=${this.method}&api_key=${this.apiK}&text=${q}&format=json&nojsoncallback=1&safe_search=3&content_type=1`;

   //checks if the query was call for this render or the api call will be made repeatedly
   if (this.state.query != queryNow)
  {
  axios.get(queryNow)
  .then(response => {
   this.setState({photos:response.data.photos.photo, query:queryNow,term:q,loading:false})
   
  }
    )
    .catch(
      (error)=>{
        console.log("You had an error",error);
      }
    )}
 }
 
 componentDidMount()
 {
  this.getPhotos("cat");
 }


  render()
  {
    return (
      <div className="container">
        
      

    
    <BrowserRouter>
    <Search searchForm={this.getPhotos}/>
    <Nav />
    
    <Switch>
    <Route exact path="/" render={ () => this.getPhotos("cat")} />
    {console.log("reload")}

    <Route exact path="/cats" render={()=> this.getPhotos("cats") } />

    <Route exact path="/flowers" render={ () => this.getPhotos("flowers")}/>
    <Route exact path="/birds" render={ () => this.getPhotos("bird")}/>
 
    <Route path="/search/:query"  render={() => <NavResults search={this.getPhotos} term={this.term} />} />
    </Switch>
    </BrowserRouter>
    <h2>{`${this.state.term} Gifs`}</h2>
    {/* This checks that it is not loading and then displays the photos component, or then their will be an error with the key 
    property */}
    {this.state.loading? "...loading":<Photos photos={this.state.photos}/>}
    
    </div>)

  }


}

export default App;
