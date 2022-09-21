import React from "react";


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description, 
            src: this.props.src,
        }
    }

    handleClick = () => {
        this.setState({ description: this.state.description + " ❤️" });
    }

    render() {
        return (
            <>
            {/* <Card style={{ width: "30rem" }} className="mx-auto my-5"> */}
                <Card border="dark" style={{ width: "30rem" }} className="mx-auto my-5">
                <Card.Img variant="top" src={this.props.src} alt={this.props.description} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleClick}>Heart!</Button>
                </Card.Body>
            </Card>
            </>
        )
    }
}





export default HornedBeast;