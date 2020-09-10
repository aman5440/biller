import React, { useState } from 'react';
import Modal from 'react-modal';
import LayoutComponent from '../layout/layout.component';
import style from './product.style.css'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
//Modal.setAppElement('#root')

export default function AddProduct() {
    let handleCloseModal = () => {
        setIsModalOpen(false);
    }
      const [isModalOpen, setIsModalOpen] = useState(true)
      const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });
    return (
      <LayoutComponent>
       
      {/* <button onClick={() => setState({ isPaneOpen: true })}>
        Click me to open right pane!
      </button> */}
      <div>
        <h3 style={{ float: 'left' }}>All Items</h3>
          <div className="btns" style={{ marginTop: "12px" }}>
            <button onClick={() => setState({ isPaneOpenLeft: true })}>
              Add New Item
            </button>
          </div>
      </div>
      <div style={{ clear: 'both' }}></div>
      
        <SlidingPane
        closeIcon={<div>X</div>}
        isOpen={state.isPaneOpenLeft}
        title="Add Item"
        from="right"
        width="500px"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
          <form>
          <div className="form-row">
            <div className="form-group">
                <label>Item Name</label>
                <input type="text" className="form-control" placeholder="Item Name" />
            </div>

            <div className="form-group">
              <label>Size Matters?</label>
                &nbsp;&nbsp;
                <input type="radio" name="size" className="radio-control"  />Yes&nbsp;&nbsp;
                <input type="radio" name="size" className="radio-control"  />No
            </div>

            <div className="form-group">
                <label>Item Height</label>
                <input type="text" className="form-control" placeholder="Height" />
            </div>
            <div className="form-group">
            <label>Item Width</label>
                <input type="text" className="form-control" placeholder="Width" />
            </div>
            <div className="form-group">
            <label>Quantity</label>
                <input type="number" className="form-control" placeholder="Quantity" />
            </div>
            <div className="form-group">
            <label>Price (per unit)</label>
                <input type="number" className="form-control" placeholder="Price" />
            </div>
            <a className="btn btn-primary">Submit</a>
          </div>
        </form>
      </SlidingPane>



      </LayoutComponent>
    );
  }


    {/* <Modal
    isOpen={isModalOpen}
    aria={{
      labelledby: "heading",
      describedby: "full_description"
    }}>
    <h1 id="heading">Alert</h1>
    <div id="full_description">
      <p>Description goes here.</p>
      <button onClick={handleCloseModal}>Close Modal</button>
    </div>
  </Modal> */}