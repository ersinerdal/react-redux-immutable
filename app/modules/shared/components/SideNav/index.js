import React from 'react';
import {Collection,CollectionItem} from 'react-materialize';

class SideNav extends React.Component {
  render() {
    return (
      <div className="left-nav">
        <Collection>
          {this.props.data.map(function (item) {
            return (
              <CollectionItem  href={item.url}>{item.text}</CollectionItem>
            );
          })}
        </Collection>
      </div>
    )
  }
}
export default SideNav;
