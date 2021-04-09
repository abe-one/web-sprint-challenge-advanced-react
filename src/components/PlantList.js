import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  constructor() {
    super();

    this.state = {
      plants: [],
      plantsDisplayed: [],
      filter: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      filter: value,
    });
    if (value !== "") {
      this.setState({
        plantsDisplayed: this.state.plants.filter((p) => p.light === value),
      });
    } else {
      this.setState({ plantsDisplayed: this.state.plants });
    }
  };
  // add state with a property called "plants" - initialize as an empty array

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((res) => {
        this.setState({ plants: res.data });
        this.setState({ plantsDisplayed: res.data });
      })
      .catch((err) => console.log(err.error[0]));
  }

  // componentDidUpdate(){

  // }

  render() {
    return (
      <>
        <select
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        >
          <option value="">By Sunlight</option>
          <option value="direct">Direct</option>
          <option value="indirect">InDirect</option>
          <option value="low">Low</option>
        </select>
        <main className="plant-list">
          {this.state?.plantsDisplayed?.map((plant) => (
            //Why this.state?.plants? the question marks
            <div className="plant-card" key={plant.id} data-testid="plant-card">
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p>
                    <span role="img" aria-label="a sun emoji">
                      ☀️
                    </span>
                    {plant.light.trim().replace(/^\w/, (l) => l.toUpperCase())}
                  </p>
                  <p>
                    <span role="img" aria-label="a splashing water emoji">
                      💦
                    </span>
                    {plant.watering}x/month
                  </p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </>
    );
  }
}
