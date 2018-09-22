import React from 'react';
import { CSSTransition } from 'react-transition-group';

class TileContainer extends React.Component {
    constructor() {
        super();
        this.state = { style: { width: 0, height: 0 }, columns: 1, tick: -1 };
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);

        this.interval = setInterval(() => {
            if (this.state.tick < this.props.children.length) {
                this.setState(prevState => ({
                    tick: prevState.tick + 1,
                }));
            }
        }, 150);

        this.setState({ tick: 0 })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateDimensions = () => {
        let columns;
        if (window.innerWidth <= 480) {
            columns = 1;
        } else if (window.innerWidth <= 720) {
            columns = 2;
        } else {
            columns = 3;
        }
        let width, height;
        width = Math.min(800, window.innerWidth);
        height = window.innerWidth <= 480 ? 200 : Math.floor(width/columns);
        this.setState({
            style: {width: width, height: height},
            columns: columns,
            tick: this.state.columns !== columns ? 0 : this.state.tick,
        });
    }
    
    render() {
        let ind = 0;
        let rows = [];
        while (ind < this.props.children.length) {
            if (ind % this.state.columns === 0) {
                rows.push([]);
            }
            rows[rows.length - 1].push(
                    <CSSTransition 
                        in={this.state.tick === ind}
                        appear
                        classNames="fade"
                        mountOnEnter
                        timeout={750}
                        key={ind}
                        >
                        {this.props.children[ind]}
                    </CSSTransition>
            );
            ind ++;
        }

        return (
            <div>
                {rows.map((row, i) => (
                    <div className='stackable' style={this.state.style} key={i} children={row}>
                    </div>
                ))}
            </div>
        );
    }
}

export default TileContainer;