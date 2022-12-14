import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




class Main extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
            {this.props.beastHorns.map((item) => {
              return (
                <Col>
                  <HornedBeast
                  setBeast = {
                    () => this.props.setBeast(item)

                  }
                    key={item._id}
                    title={item.title}
                    src={item.image_url}
                    description={item.description}
                    keyword={item.keyword}
                    horns={item.horns}
                  />

                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    );
  }
}


export default Main;

