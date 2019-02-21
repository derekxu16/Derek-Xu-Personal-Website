import React from "react"

import 'semantic-ui-css/semantic.min.css';
import '../css/index.css';

export default class Template extends React.Component {
  render() {
    return (
      <div className="fullscreen" >
        {this.props.children}
      </div>
    )
  }
}