import React from 'react';
import  Modal from 'react-bootstrap/Modal';


export default class SelectedBeast extends React.Component {
      render() {
            const {title,description,imageurl,fClose,show} = this.props;
            return (
                  <Modal show={show} onHide={fClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <img src={imageurl} alt={title} style={{height:"100%", width:"90%", objectFit:'contain'}}/>
                        </Modal.Body>
                  <Modal.Footer>
                   {description}
                  </Modal.Footer>
                </Modal>
            )
      }
}
