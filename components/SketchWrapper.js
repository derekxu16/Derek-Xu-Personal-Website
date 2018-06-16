import React, { Component } from 'react';

class SketchWrapper extends Component {
    componentDidMount() {
        const p5 = require('p5');
        this.canvas = new p5(this.props.sketch, this.wrapper);
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        return (<div
            ref={ref => {if(ref) this.wrapper = ref}}
            style={{ overflow: 'hidden', height: '100%', position: 'absolute', left: -2 }}
        />)
    }
}

export default SketchWrapper