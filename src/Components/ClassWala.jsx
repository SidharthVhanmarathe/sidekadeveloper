import React, { Component } from "react";

export default class ClassWala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empno: "12394123648169832461732",
      initval: {
        firstname: "kiran",
        lastname: "",
      },
    };
  }



//    just change the value of empno then system should give msg empno changeed
  
  ChangValue = () => {
    this.setState({
      initval: { ...this.state.initval, lastname: "Gadagi" },
    });
  };

  componentDidMount() {
    this.ChangValue();
    setInterval(() => {
        this.setState({empno:"14"});
        
      }, 2000);
  }

  render() {
    return <div>ClassWala

        {JSON.stringify(this.state)}

    </div>;
  }
}
