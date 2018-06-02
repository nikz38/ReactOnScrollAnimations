import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Animate.css';

class Animate extends Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.addAnimatingStyles = this.addAnimatingStyles.bind(this);
        this.state = {
            rect: {},
            isAnimated: false,
            animatingStyles: {}
        }
    }

    render() {
        return (
            <div className="animation-wrapper" style={this.state.animatingStyles}>
                {this.props.children}
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll() {
        this.setState({
            rect: ReactDOM.findDOMNode(this).getBoundingClientRect()
        });

        if ((this.state.rect.top < window.innerHeight) && !this.state.isAnimated) {
            this.setState({ isAnimated: true });
            this.addAnimatingStyles();
        }
    }

    addAnimatingStyles() {
        this.setState({
            animatingStyles: {
                transform: this.props.transform,
                transformOrigin: this.props.transformOrigin,
                transitionDuration: `${this.props.transitionDuration}s`,
                transitionTimingFunction: this.props.transitionTimingFunction,
                transitionDelay: this.props.transitionDelay,
                opacity: this.props.opacity,
                marginTop: `${this.props.marginTop}px`,
                marginRight: `${this.props.marginRight}px`,
                marginBottom: `${this.props.marginBottom}px`,
                marginLeft: `${this.props.marginLeft}px`,
                width: this.props.width,
                height: this.props.height,
            }
        })
    }
}

export default Animate;
