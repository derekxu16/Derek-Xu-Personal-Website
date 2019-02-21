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
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updateDimensions = () => {
		let columns;
		if (window.innerWidth >= 680) {
			columns = 3;
		} else if (window.innerWidth >= 400) {
			columns = 2;
		} else {
			columns = 1;
		}
		let width, height;
		width = Math.min(800, window.innerWidth);
		height = Math.floor(width/columns);

		if (this.state.tick === -1) {
			this.interval = setInterval(() => {
				if (this.state.tick < this.props.children.length) {
					if (this.state.tick == 0) {
						window.scroll({ top: 0 });
						setTimeout(() => window.scroll({top: document.body.scrollHeight, behavior: 'smooth' }), 270);
						setTimeout(() => window.scroll({top: 0, behavior: 'smooth' }), 1000);
					}
					this.setState(prevState => ({
						tick: prevState.tick + 1,
					}));
				}
			}, 150);

			setTimeout(() => {
				clearInterval(this.interval);
			}, 2000);
		}

		this.setState({
			style: { width, height },
			columns: columns,
			tick: this.state.columns !== columns ? -1 : this.state.tick,
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
			<div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
				{rows.map((row, i) => (
					<div className="stackable" style={this.state.style} key={i} children={row}>
					</div>
				))}
			</div>
		);
	}
}

export default TileContainer;