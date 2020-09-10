import React, { useRef } from 'react'
import LayoutComponent from '../layout/layout.component';
import  style from './saleBill.style.css';
import ReactToPrint from 'react-to-print';
class ComponentToPrint extends React.Component {
    render() {
      return (
          <div className="printParent">
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

export default function SaleBill() {
    const componentRef = useRef();
    return (
    <LayoutComponent>
       <div className="card">
        <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
        </div>
        </div>
        <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    
    </LayoutComponent>
    )
}
