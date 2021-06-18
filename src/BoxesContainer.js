import React, { Component } from 'react';
import Box from './Box';
import './BoxesContainer.css'

class BoxesContainer extends Component {
    static deafultProps = {
        numBoxes: 18,
        allColors: ["red", "blue", "green", "orange", "yellow"]
        // allColors: [
        //     "rgb(242,230,255)", 'rgb(230,204,255)', 'rgb(217,179,255)',
        //     'rgb(204,153,255)', 'rgb(191,128,255)', 'rgb(179,102,255)',
        //     'rgb(166,77,255)', 'rgb(153,51,255)', 'rgb(140,25,255)',
        //     'rgb(128,0,255)', 'rgb(115,0,230)', 'rgb(102,0,204)',
        //     'rgb(80,0,9)', 'rgb(77,0,153)', 'rgb(64,0,128)'
        // ]
    };
    
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
          <Box colors={this.props.allColors} />
        ));

        return <div className='BoxesContainer'>{boxes}</div>;
    }
}
 
export default BoxesContainer;