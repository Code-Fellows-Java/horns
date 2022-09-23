import React from 'react';

import Form from 'react-bootstrap/Form';

class HornedBeastForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <>
                <Form on={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="horns">
                        <Form.Label>Number of horns.</Form.Label>
                        <Form.Control as="select" onChange={this.props.filterBeast}>
                            <option value="all">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        );
    }
}



export default HornedBeastForm;

