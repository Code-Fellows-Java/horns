import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class HornedBeastForm extends React.Component {


    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="horns">
                        <Form.Label>Number of horns.</Form.Label>
                        <Form.Control as="select">
                            <option value="all">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}


export default HornedBeastForm;

