import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import LayoutComponent from '../layout/layout.component';
import style from './product.style.css'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import axios from 'axios';
import appconfig from '../../config/default';
import DataTable, { createTheme } from 'react-data-table-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (msg) => toast(msg);
createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});




let clickHandler = (row) => {
  console.log('am row~~>',row);
  axios.delete(`${appconfig.url}/product/delete/${row._id}`).then(()=>{
    console.log('Sent Delete Request');
    notify('Item has been deleted');
    updateTableData();
  });
}

const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' },{ id: 1, title: 'Aman', year: '1989' } ];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Price',
    selector: 'price',
    sortable: true,
    right: true,
  },
  {
    name: 'Quantity',
    selector: 'quantity',
    sortable: true,
    right: true,
  },
  {
    cell:(row) => <div><button onClick={()=>clickHandler(row)} style={{backgroundColor:'red'}} id={row.ID}>Edit</button><button onClick={()=>clickHandler(row)} style={{backgroundColor:'red'}} id={row.ID}>Delete</button></div>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
//Modal.setAppElement('#root')

export default function AddProduct() {

  const [tableData,setTableData] = useState([]);
  const [q,setQ] = useState('');

  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }

    updateTableData();
  }, [])


  let updateTableData = () => {
    fetch(`${appconfig.url}/product/all`)
    .then(response=>response.json())
    .then(json=>setTableData(json))
  }

  let getTrProps = (state, rowInfo, instance) => {
    if (rowInfo) {
      return {
        className: (rowInfo.row.status == 'D') ? "status-refused" : "aman", // no effect
        style: {
          background: rowInfo.row.age > 20 ? 'red' : 'green'
        }
      }
    }
    return {};
  }

  let handleCloseModal = () => {
        setIsModalOpen(false);
    }
    let setItemName = (e) => {
      console.log('am new title ', e.target.value);
      setTitle(e.target.value)
    }

    let setItemQuantity = (e) => {
      console.log('am new title ', e.target.value);
      setQuantity(e.target.value)
    }

    let setItemPrice = (e) => {
      console.log('am new title ', e.target.value);
      setPrice(e.target.value)
    }

    let saveProductDetail = (e) => {
      axios.post(`${appconfig.url}/product/create`,{title:title,quantity:quantity,price:price}).then(data=>{
        updateTableData();
      })

     
      console.log('saveProductDetail called',e);
    }
      const [isModalOpen, setIsModalOpen] = useState(true)
      const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });
      const [quantity,setQuantity] = useState(0);
      const [title,setTitle] = useState('');
      const [price,setPrice] = useState(0)
    return (
      <LayoutComponent>
       
      {/* <button onClick={() => setState({ isPaneOpen: true })}>
        Click me to open right pane!
      </button> */}
      <div>
        <div className="btns" style={{ marginTop: "12px" }}>
            <button onClick={() => setState({ isPaneOpenLeft: true })}>
              Add New Item
            </button>
          </div>
        <DataTable
          title="Products"
          columns={columns}
          data={tableData}
          getTrProps={getTrProps}
        />
          
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
                <input type="text" onChange={setItemName} className="form-control" placeholder="Item Name" />
            </div>

            {/* <div className="form-group">
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
            </div> */}
            <div className="form-group">
            <label>Quantity</label>
                <input type="number" className="form-control" onChange={setItemQuantity} placeholder="Quantity" />
            </div>
            <div className="form-group">
            <label>Price (per unit)</label>
                <input type="number" className="form-control" onChange={setItemPrice} placeholder="Price" />
            </div>
            <a className="btn btn-primary" onClick={saveProductDetail}>Submit</a>
          </div>
        </form>
      </SlidingPane>

      <ToastContainer />

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