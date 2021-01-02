import React from "react";
const AutoCompleteItem = (props) => {

    return (
        <div className={`search-group-item ${props.isHighlighted?'active':''}`}  onClick={(e)=>props.onSelect(props.title)}>
            <div >
                {props.title}
            </div>
        </div>
    );
};

export default AutoCompleteItem;