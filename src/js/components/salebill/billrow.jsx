import React from 'react'
import  style from './saleBill.style.css';
import AutoComplete from '../autocomplete/autocomplete.component';

export default function BillRow() {
    return (
        <div className="billRow">
            <div className="row">
                <div className="col">
                    <AutoComplete onSelect={()=>{}} />
                </div>
                <div className="col">
                    <input type="number" />
                </div>
                <div className="col">
                    Select Item
                </div>
                <div className="col">
                Select Item
                </div>
                <div className="col">
                    <a className="btn btn-danger">X</a>
                </div>
                
            </div>
        </div>
    )
}
