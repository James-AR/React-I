import React, { Component } from 'react';

class Child extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    console.log('props: ', this.props);
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    return (
      <div style={styles} onClick={this.handleClick}>{this.props.thing}</div>
    )
  }
}

export default Child;