import React from "react";


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           _id: this.props._id,
            title: this.props.title,
            description: this.props.description,
            keyword: this.props.keyword,
            horns: this.props.horns,
            src: this.props.src,
            votes: '',
        }
    }

    handleClick = () => {
        this.setState({ votes: this.state.votes + '❤️' });
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }} className="h-100 mx-auto px-1">
                    <Card.Img className="py-4 h-180 w-285 m-auto" variant="top" src={this.state.src} alt={this.state.keyword} title={this.state.title} />
                    <Card.Body className="py-auto">
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>{this.state.description}</Card.Text>
                        <Card.Text>Horns: {this.state.horns}</Card.Text>
                        <Card.Text>Favorites: {this.state.votes}</Card.Text>
                        <Button className="mb-3" variant="primary" onClick={this.handleClick}>Heart</Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
}








export default HornedBeast;