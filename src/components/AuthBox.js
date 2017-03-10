/**
 *  Copyright (c) Hoesel Markus
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';


/**
 * AuthBox
 *
 * Sets the window.__TOKEN field according to the value of the input field
 */
export class AuthBox extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    inputFieldPlaceholder: PropTypes.string,
    buttonTitle: PropTypes.string,
    buttonLabel: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  render() {
    return (
      <div className="authBox">
        <input
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          type="text"
          placeholder={window.__TOKEN || this.props.inputFieldPlaceholder}
        />
        <a
          className={'toolbar-button'}
          onMouseDown={preventDefault}
          onClick={this.handleClick}
          title={this.props.buttonTitle}>
          {this.props.buttonLabel}
        </a>
      </div>
    );
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  }

  handleKeyDown = event => {
    if (event.keyCode == 13) {
      this.handleToken();
    }
  }

  handleClick = () => {
    this.handleToken();
  }

  handleToken = () => {
      window.__TOKEN = this.state.value;
      this.setState({
        value: ''
      })
  }  

}

function preventDefault(e) {
  e.preventDefault();
}
