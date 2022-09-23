import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';
import HornedBeastForm from './HornedBeastForm.js';
import Modal from 'react-bootstrap/Modal';
import data from './assets/data.json';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedHornedBeast: {},
      beastArr: data,
    }
  }

  setShowModalTrue = () => {
    this.setState({ showModal: true });
  }

  setBeast = Beast => {
    this.setState({ selectedHornedBeast: Beast })
    this.setShowModalTrue()
  }

  setShowModalFalse = () => {
    this.setState({ showModal: false });
  }

  filterBeast = (e) => {
    let hornedNum = parseInt(e.target.value)
    let filterArr = data.filter(b => hornedNum === b.horns)
    this.setState({ beastArr: filterArr })
  }

  render() {
    return (
      <>
        <HornedBeastForm filterBeast={this.filterBeast} />
        <Header />
        <Main
          setBeast={this.setBeast}
          beastHorns={this.state.beastArr}
        />
        <Footer />
        <HornedBeastModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedHornedBeast={this.state.selectedHornedBeast} />
      </>
    )
  }
}

class HornedBeastModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedHornedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img style={{ width: '100%' }} variant="top" src={this.props.selectedHornedBeast.image_url} alt={this.props.selectedHornedBeast.title}>
            </img>
            <p>
              {this.props.selectedHornedBeast.description}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.setShowModalFalse}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
