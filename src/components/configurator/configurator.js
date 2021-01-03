import React, { useState } from 'react';
import { connect } from 'react-redux';
import './configurator.css'
// import EditPage from '../editPage/editPage'



function Configurator(props) {

    const [flag, setFlag] = useState(false);
    const { flagCon } = props

    return (
        <>
            {  flagCon &&
                <div id="wrap-configurator" className="pt-4 px-2">
                    <div id="head-configurator" className="row d-flex justify-content-between m-0 mb-3 mt-1">
                        <span className="material-icons pointer">
                            settings
                 </span>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 21.5">
                            <defs></defs>
                            <path className="a" d="M8,18.75A10.75,10.75,0,1,0,18.75,8,10.75,10.75,0,0,0,8,18.75Zm10.75,7.976V10.774a7.976,7.976,0,1,1,0,15.952Z" transform="translate(-8 -8)"></path>
                        </svg>
                    </div>

                    <div id="accordion" className=''>
                        {/* <EditPage></EditPage> */}
                        <div id="bottom_configurtor">
                            <button className='btn'>
                                <span class="material-icons iconBottom" style={{ color: "#cac6c6" }}>
                                    remove_red_eye
                            </span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default connect(
    (state) => {
        return {
            flagCon: state.page.isOpenConfigurator,
        }
    }
)(Configurator)

