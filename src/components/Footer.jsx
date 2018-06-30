import React, { Component } from 'react';

import { Jumbotron, footer } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Jumbotron
        style={{
          padding: '10px 0',
          bottom: '0',
          position: 'fixed',
          backgroundColor: '#ffffff',
          width: '100%',
          margin: '0',
          height: '60px',
          borderRadius: '0'
        }}
      >
        <footer className="foot">
          <span className="text-muted">
            msnature12@gmail.com &#169; {new Date().getFullYear()}
          </span>
        </footer>
      </Jumbotron>
    );
  }
}

export default Footer;
