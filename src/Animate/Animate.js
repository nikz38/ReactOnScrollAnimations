import React, { Component } from 'react';
import './Animate.css';

class Animate extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.onScroll = this.onScroll.bind(this);
        this.addAnimatingStyles = this.addAnimatingStyles.bind(this);
        this.state = {
            position: {},
            isAnimated: false,
            animatingStyles: {}
        }
    }

    render() {
        return (
            <div className="animation-wrapper" style={this.state.animatingStyles} ref={this.myRef}>
                {this.props.children}
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll() {
        this.setState({
            position: this.myRef.current.getBoundingClientRect()
        });

        if ((this.state.position.top < window.innerHeight) && !this.state.isAnimated) {
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
