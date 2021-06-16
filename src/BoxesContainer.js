import React, { Component } from 'react';
import Box from './Box';

class BoxesContainer extends Component {
    static deafultProps = {
        colors: [
            'rgb(242,230,255)', 'rgb(230,204,255)','rgb(217,179,255)'
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(217,179,255)'
        }
    }

    
    render() { 
        return (
            <section>
                <Box />
                <Box />
            </section>
            
        );
    }
}
 
export default BoxesContainer;