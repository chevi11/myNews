import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import './stage.css'




function Stage(props) {
    const [flag, setFlag] = useState(true);

    return (
        <>
        <div id="stage" className="col-md-9 d-flex p-0 m-auto">

            <div id="landingPage_edit" className="m-auto border_page m-auto">
              
            </div>
        </div>
        </>
    )
}
export default connect(

)(Stage)
