import React, { Component } from 'react'

export class Headline extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const {header,desc} = this.props;
      if(!header) return null;
    return (
      <div data-test='HeadLineComponent'>
          <h1 data-test='Header'>{header}</h1>
          <p data-test='Desc'>{desc}</p>
      </div>
    )
  }
}

export default Headline