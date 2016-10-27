import React from 'react';

import {Footer} from 'react-materialize';


class PageFooter extends React.Component {
  render() {
    return (
        <Footer copyrights="&copy; 2015 Copyright Text" moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}>
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
    )
  }
}
export default PageFooter;
