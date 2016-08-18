import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map(function (value) {
                        return (
                            <li key={value.id}>{value.name} {value.cardNumber}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

Card.propTypes = {
    data: React.PropTypes.array.isRequired
};

Card.defaultProps = {
    data: []
};

export default Card;