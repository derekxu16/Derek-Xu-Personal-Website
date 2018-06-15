import React, { Component } from 'react';

class SketchWrapper extends Component {
    componentDidMount() {
        this.canvas = new p5(this.props.sketch, this.refs.wrapper);
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        return <div ref="wrapper" style={{ overflow: 'hidden', height: '100%', position: 'absolute', left: -2 }} />
    }
}

export default SketchWrapper