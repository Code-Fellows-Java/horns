import React from "react";
import HornedBeast from "./HornedBeast";
import ram from './ram.jpg';
import Jackalope from './Jackalope.jpg';

class Main extends React.Component {
  render() {
    return (
      <>
        <div>
         <HornedBeast src={ram} title={"Ram"} description={"A ram"}/>
        </div>
        <div>
            <HornedBeast src={Jackalope} title={"Jackalope"} description={"A Jackalope"}/>  

        </div>
      </>
    );
  }

}

export default Main;