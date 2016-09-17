import React from 'react';
import { connect } from 'react-redux'
import CardList from '../../components/CardList';
import {fetchCards} from './actions';
import Spinner from 'modules/shared/components/Spinner';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCards());
  }
  render() {
    const {cardList,isLoading} = this.props;
    return (
      <div>
        {isLoading ? <Spinner /> : <CardList data={cardList} />}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.toJS().Cards;
}
export default connect(mapStateToProps)(Cards);