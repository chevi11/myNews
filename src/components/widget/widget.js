import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './widget.css'

function Widget(props) {
    return (
        <div  className="d-flex pl-1" >
            <div className="newEelement col-1 d-flex justify-content-center p-1 px-3 my-3 " >
                <span class="material-icons">
                    {props.icon}
                </span>

            </div>
            <div className="mt-3 ml-2 p">
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default connect(
  

)(Widget)