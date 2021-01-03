import React from 'react';
import { connect } from 'react-redux';
import './menu.css'
import Widget from '../widget/widget'



function Menu(props) {
    return (
        <div id="menu" className="col-md-3 pr-0">
            <button className="btn col-md-12 my-2 p-0" id="new_button">
                +
                New
            </button>
            <div id="sections_select" className="d-flex flex-column">
                <div className="form-check m-2">
                    <input type="checkbox" className="form-check-input" id="show_grid_checkbox" />
                    <label className="form-check-label" for="show_grid_checkbox">Show Grid Line</label>
                </div>
                <div className="row justify-content-around no-gutters my-auto">
                    <div id="grid1" className="col-3 grid_imgs"></div>
                    <div id="grid2" className="col-3 grid_imgs"></div>
                    <div id="grid3" className="col-3 grid_imgs"></div>
                </div>


            </div>
            <div id="elements_select" className="my-2 p-2 pl-4">
                <strong>Widget</strong>
                <Widget name="Title" tagWidget="h1" icon="title"></Widget>
                <Widget name="Text" tagWidget="p" icon="notes"></Widget>
                <Widget name="Image" icon="crop_original"></Widget>
                <Widget name="Form" icon="description"></Widget>
                <Widget name="Video" icon="videocam"></Widget>
                <Widget name="Html" icon="code"></Widget>
                <Widget name="Button" icon="code"></Widget>
                
            </div>

        </div >
    )
}
export default connect(
    undefined
)(Menu)
