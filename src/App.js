import React from 'react';
// import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import data from './assets/data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    }
  }

  setShowModalFalse = () => {
    this.setState({ showModal: false });
  }






  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />

        {data.map((item) => {
          return (
        <HornedBeastModal
        key={item._id}
        title={item.title}
        src={item.image_url}
        description={item.description}
        keyword={item.keyword}
        horns={item.horns}
         />
          )
        })}
        <HornedBeastModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} />  
      </>
    );
  }
}



class HornedBeastModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
        <Modal.Header closeButton>
          <Modal.Title>Why won't you work</Modal.Title>
        </Modal.Header>
        <Modal.Body>This modal is a dissapointment</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={null}>
            Close
          </Button>
          <Button variant="primary" onClick={null}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default App;
