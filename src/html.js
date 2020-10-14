import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* <meta name="description" content="Derek Xu - Software Engineering student at uWaterloo" /> */}
          {/* <meta name="keywords" content="Derek, Xu, Software, Engineer, University, Waterloo, Google, TD, UX, Frontend, Developer, Javascript, React, Angular, SQL, Python, Full-Stack, UX, Frontend" /> */}
          <link href="https://fonts.googleapis.com/css?family=Muli:200|Dosis:300|Lato|Arimo" rel="stylesheet" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            className="fullscreen"
            style={{ display: 'flex', justifyContent: 'center' }}
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
