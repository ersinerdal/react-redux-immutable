import React from 'react';

class Cardlist extends React.Component {
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

Cardlist.propTypes = {
  data: React.PropTypes.array.isRequired
};

Cardlist.defaultProps = {
  data: []
};

export default Cardlist;