import React, { useState } from 'react'
import BillRow from './billrow'
import  style from './saleBill.style.css';

export default function BillTable() {
    
    let clicks = [1];
    const [rowNum, setRowNum] = useState(clicks)
    const changeRow = () => {
        console.log('clicks',clicks)
        //clicks = 
        setRowNum(clicks => [...clicks,clicks.length]);
        console.log('rowNum After',rowNum)
    }
    const removeRow = (index) => {
        console.log('Remove index',index)
    }
    return (
        <>
        <a className="btn btn-primary pull-right" onClick={e=>changeRow(e)}>Add More</a>
        <div className="billTable">
        
        <div className="row">
            <div className="col">
                Item
            </div>

            <div className="col">
                Quantity
            </div>

            <div className="col">
                In Stock
            </div>

            <div className="col">
                Price
            </div>
            <div className="col">
                Action
            </div>
        </div>
            {console.log('am row num',rowNum)}
            {
                
                rowNum.map((e,i)=>{
                return <BillRow onRemove={i=>removeRow(i)} />
            })
            }
            
        </div>
        </>
    )
}
