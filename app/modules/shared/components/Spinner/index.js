import React from 'react';
import {Preloader} from 'react-materialize'

class Spinner extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='loading'>
                <Preloader flashing/>
            </div>
        )
    }
};
export default Spinner;