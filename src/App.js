import "./App.css";
import React from "react";
import img from "../src/assets/ameny.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import LastUpTime from "./components/LastUpTime";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {
        fullName: "",
        bio: "",
        imgSrc: "",
        profession: "",
      },

      show: false,
    };
  }


  handleClick = () => {
    this.setState({
      person: {
        fullName: "Ameny OUELHAZI",
        bio: "Computing applied to management",
        imgSrc: img,
        profession: "Developper ",
      },

      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <br></br>
        <Button
          type="button"
          onClick={() => this.handleClick()}
          variant="danger"
        >
          {this.state.show ? " Hide Profile" : "Show Profile"}
        </Button>
        <br></br>
       
        <img style={{height:"300px"}} src={this.state.show && this.state.person.imgSrc} alt="" />
        
        <div className="desc">
          <h3>{this.state.show && this.state.person.fullName}</h3>
          <h4>{this.state.show && this.state.person.bio}</h4>
          <h4>{this.state.show && this.state.person.profession}</h4>
        </div>
        {this.state.show && <LastUpTime />}
      </>
    );
  }
}

export default App;
