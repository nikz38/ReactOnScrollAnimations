import React, { Component } from 'react';
import Animate from './Animate/Animate';
import Car from './Car/Car';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="poster">
                    <div className="heading">
                        <h1>React Animations Race</h1>
                        <h3>Scroll to start!</h3>
                    </div>
                </div>
                <div className="race-track">

                    <div className="lane">
                        <div className="number">1</div>
                        <Animate
                            transitionDuration={3}
                            transitionTimingFunction={'ease-in-out'}
                            transform={'translateX(500px) scale(1.4)'}>
                            <Car color={'red'}></Car>
                        </Animate>
                    </div>

                    <div className="lane">
                        <div className="number">2</div>
                        <Animate
                            transitionDuration={3.5}
                            opacity={0.1}
                            transform={'translateX(750px)'}>
                            <Car color={'blue'}></Car>
                        </Animate>
                    </div>

                    <div className="lane">
                        <div className="number">3</div>
                        <Animate
                            transitionDuration={3}
                            transform={'translateX(700px) rotateY(360deg)'}>
                            <Car color={'orange'}></Car>
                        </Animate>
                    </div>

                    <div className="lane">
                        <div className="number">4</div>
                        <Animate
                        transitionDuration={2.5}
                        transformOrigin={'center'}
                        transitionTimingFunction={'ease-in'}
                        transform={'translateX(700px) rotateX(1440deg)'}>
                            <Car color={'green'}></Car>
                        </Animate>
                    </div>

                    <div className="lane">
                        <div className="number">5</div>
                        <Animate
                            transitionDuration={1.5}
                            transitionTimingFunction={'ease-out'}
                            transform={'translateX(800px) scale(0.5)'}>
                            <Car color={'black'}></Car>
                        </Animate>
                    </div>

                    <div className="lane">
                        <div className="number">6</div>
                        <Animate
                            transitionDuration={3}
                            transform={'translateX(300px) translateY(-200px) rotateX(720deg)'}>
                            <Car color={'purple'}></Car>
                        </Animate>
                    </div>

                    <div className="finish-line"></div>
                </div>
            </div>
        );
    }
}

export default App;
