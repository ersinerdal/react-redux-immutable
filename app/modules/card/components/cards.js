import React from 'react';
import { connect } from 'react-redux'
import Card from 'modules/card/components/card';
import {fetchCards} from 'modules/card/actions/actions';
import Spinner from 'modules/shared/components/spinner';

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
            {isLoading ? <Spinner /> : <Card data={cardList} />}
            </div>    
        )
    }
}
function mapStateToProps(state) {
  return state.toJS().cards;
}
export default connect(mapStateToProps)(Cards);