import React from 'react';

class Spinner extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='loading'>Loading&#8230;</div>
        )
    }
};
export default Spinner;