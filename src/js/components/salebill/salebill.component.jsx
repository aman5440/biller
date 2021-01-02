import React, { useRef } from 'react'
import LayoutComponent from '../layout/layout.component';
import  style from './saleBill.style.css';
import ReactToPrint from 'react-to-print';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';

import AutoComplete from '../autocomplete/autocomplete.component';
import Ifloat from '../input/ifloat.component';
import BillTable from './billtable'
class ComponentToPrint extends React.Component {
    render() {
      return (
          <div className="printParent" >
              <center><h2>ਲੋਪੋ ਸ਼ਟਰਿੰਗ</h2></center>
              <div>
                    
                    <div style={{float:"left"}}>
                        <table >
                            <thead>
                                <th style={{textAlign:'center'}}>BILL TO</th>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <div className="printParentAddr">
                                            <h4>Gurmukh Singh</h4>
                                            <h4>Kotla Place</h4>
                                            <h5>9888089090</h5>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{float:"right"}}>
                        <table>
                            <thead>
                                <th style={{textAlign:'center'}}>SHIP TO</th>

                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <div className="printParentAddr">
                                            <h4>Gurmukh Singh</h4>
                                            <h4>Kotla Place</h4>
                                            <h5>9888089090</h5>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="clear"></div>
              </div>
              <br />
              
              <div style={{marginTop:"20px"}}>
              <table className="saleBill">
                <thead>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                    </tr>
                    <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                    </tr>
                    <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                    </tr>
                    <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                    </tr>
                    <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                    </tr>
                    <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                    </tr>
                </tbody>
                </table>
              </div>
              
          </div>

      );
    }
  }

  function handleEnter(event) {
    if (event.keyCode === 113) {
      const form = event.target.form;
      console.log('am form~>',form,'am event~>',event.target);
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      //form.elements[index + 1].addClass()
      event.preventDefault();
    }
    if (event.keyCode === 112) {
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index - 1].focus();
        event.preventDefault();
      }
  }
  
  function MyInput(props) {
    return <input onKeyDown={handleEnter} {...props} />;
  }
  
  function MyForm() {
    return (
      <form>
        <Ifloat handleEnter={handleEnter} />
        <Ifloat handleEnter={handleEnter} />
        <Ifloat handleEnter={handleEnter} />
        <Ifloat handleEnter={handleEnter} />
        <Ifloat handleEnter={handleEnter} />
        <Ifloat handleEnter={handleEnter} />
        <button type="submit">Submit</button>
      </form>
    );
  }

let ItemRow = () => {
    
    const selectionRange = {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
    }
    const [open, setOpen] = React.useState(false);
    const [item,setItem] = React.useState({});
    let handleSelect = (ranges) =>{
        console.log('handleSelect',ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    return (
        <tr>
            <th>
            <AutoComplete onSelect={_item=>setItem(_item)}/>
            </th>
            <th>
                <select>
                    <option>Quantity</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </th>
            <th>
            <button onClick={ () => { setOpen(!open); } }>{!open?'Open':'Close'}</button>
            {open 
            ?<DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
            />:''
            }
            <MyForm />
            </th>
        </tr>
    )
}

let CreateBill = () =>  {
    
    return (
        <div>
            <div>
                <h2 className="float-left">Items On Rent </h2>
                <a className="btn btn-success float-right">Add Item To Bill</a>
            </div>
           
            <div>
            
                <form>
                    <table>
                        <tr>
                            <td>
                                Item
                            </td>
                            <td>
                                Quantity
                            </td>
                            <td>
                                Date
                            </td>
                            <td>
                                Days
                            </td>
                            <td>
                                Price
                            </td>
                        </tr>
                        <ItemRow />
                    </table>
                </form>
            </div>
        </div>
    )
}



export default function SaleBill() {
    const componentRef = useRef();
    return (
    <LayoutComponent>
       <div className="card">
        <div className="container-fluid">
        <BillTable/>
        {/* <CreateBill /> */}
        </div>
        </div>
        <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div style={{display:'none'}}>
      <ComponentToPrint ref={componentRef}  />
      </div>
    
    </LayoutComponent>
    )
}
