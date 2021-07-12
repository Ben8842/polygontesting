
import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      polygonData: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    /*fetch(
      "https://api.polygon.io/v2/reference/news?limit=3&order=descending&sort=published_utc&ticker=AAPL&published_utc.gte=2021-04-26&apiKey=JAVPppRs8ukmgLkgh6XmxUXKH5orOZqD"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
         
          polygonData: json,
          
        });
        console.log("complete");
      });*/
  }

  apifetcher() {
  
      fetch(
      "https://api.polygon.io/v2/reference/news?limit=3&order=descending&sort=published_utc&ticker=AMZN&published_utc.gte=2021-04-26&apiKey=JAVPppRs8ukmgLkgh6XmxUXKH5orOZqD"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
         
          polygonData: json,
          isLoaded: true,
          
        });
      });
    console.log("fetch complete")


  }

  stateprinter() {
    console.log(this.state);
    
  }

  displaynews() {
    console.log("hello news")
  }

  render() {
    var { polygonData, isLoaded } = this.state;
   
   
      const newscontainer = (
        <div>
          <div>TITLE: {isLoaded ? polygonData.results[0].title : "loading"}</div>
          <div>ARTICLE URL <a href={isLoaded ? polygonData.results[2].article_url : "loading"}>{isLoaded ? polygonData.results[0].article_url : "loading"}</a></div>
          <div>ARTICLE DESCRIPTION {isLoaded ? polygonData.results[0].description : "loading"}</div>
          <div>BREAK BREAK BREAK</div>
          <div>TITLE: {isLoaded ? polygonData.results[1].title : "loading"}</div>
          <div>ARTICLE URL <a href={isLoaded ? polygonData.results[2].article_url : "loading"}>{isLoaded ? polygonData.results[1].article_url : "loading"}</a></div>
          <div>ARTICLE DESCRIPTION {isLoaded ? polygonData.results[1].description : "loading"}</div>
          <div>BREAK BREAK BREAK</div>
          <div>TITLE: {isLoaded ? polygonData.results[2].title : "loading"}</div>
          <div>ARTICLE URL <a href={isLoaded ? polygonData.results[2].article_url : "loading"}>{isLoaded ? polygonData.results[2].article_url : "loading"}</a></div>
          <div>ARTICLE DESCRIPTION {isLoaded ? polygonData.results[2].description : "loading"}</div>
          <div>BREAK BREAK BREAK</div>
        </div>
      )
    

    return (
      <div>
        <div>
          <button onClick={() => this.apifetcher()}>TEST THE POLYGON API </button>
        </div>
        <div>
          <button onClick={() => this.stateprinter()}>PRINT THE STATE</button>
        </div>
      
        <div>{isLoaded ? newscontainer : null}</div>
      </div>
    )
  }
}



export default App;
