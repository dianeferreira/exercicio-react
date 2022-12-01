import axios from "axios";
import React, { Component } from "react";

class HomeClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { listBeers: [] };
  }

  componentDidMount() {
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=20")
      .then((result) => this.setState({ listBeers: result.data }));
  }

  render() {
    return (
      <div className="container-home">
        <div className="-beers-container">
          {this.state.listBeers.map((beer) => (
            <div key={beer.id} className="-cards">
              <div className="-cards">
                <div className="--none">
                  <div className="container-beerCards">
                    <img className="-image" src={beer?.image_url} />
                    <span className="-title">{beer?.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeClassComponent;
