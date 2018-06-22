# On scroll animations with React.js

A simple app that demonstrates animations that are triggered on user scrolling once the animating element is in the viewport.

**Requirements**
node -v 10+

## To run this app:
  
clone this repository
```
npm install
npm start
```
Your app should open at <a href="http://localhost:3000">http://localhost:3000

## Basic usage

All you have to do is to wrap the element that you want to animate with `animate` tag and pass props that you want to animate:

```html
<Animate
    transitionDuration={2}
    transform={'translateX(700px)'}>
    <Car color={'orange'} />
</Animate>
```
Animation will be trigered once the element is in the viewport.

## Settings

These are the props that can be passed for animation:

| Attribute | Type | 
|----------------------|----------|
| transform | string |
| transformOrigin | string |
| transitionDuration | number |
| transitionTimingFunction | string |
| transitionDelay | string |
| opacity | number |
| marginRight | string |
| marginLeft | string |
| width | string |
| height | string |

## Example

```html
<div className='race-track'>

                    <div className='lane'>
                        <div className='number'>1</div>
                        <Animate
                            transitionDuration={3}
                            transitionTimingFunction={'ease-in-out'}
                            transform={'translateX(500px) scale(1.4)'}>
                            <Car color={'red'} />
                        </Animate>
                    </div>

                    <div className='lane'>
                        <div className='number'>2</div>
                        <Animate
                            transitionDuration={3.5}
                            opacity={0.1}
                            transform={'translateX(750px)'}>
                            <Car color={'blue'} />
                        </Animate>
                    </div>

                    <div className='lane'>
                        <div className='number'>3</div>
                        <Animate
                            transitionDuration={3}
                            transform={'translateX(700px) rotateY(360deg)'}>
                            <Car color={'orange'} />
                        </Animate>
                    </div>

                    <div className='lane'>
                        <div className='number'>4</div>
                        <Animate
                            transitionDuration={2.5}
                            transformOrigin={'center'}
                            transitionTimingFunction={'ease-in'}
                            transform={'translateX(700px) rotateX(1440deg)'}>
                            <Car color={'green'} />
                        </Animate>
                    </div>

                    <div className='lane'>
                        <div className='number'>5</div>
                        <Animate
                            transitionDuration={1.5}
                            transitionTimingFunction={'ease-out'}
                            transform={'translateX(800px) scale(0.5)'}>
                            <Car color={'black'} />
                        </Animate>
                    </div>

                    <div className='lane'>
                        <div className='number'>6</div>
                        <Animate
                            transitionDuration={3}
                            transform={'translateX(300px) translateY(-200px) rotateX(720deg)'}>
                            <Car color={'purple'} />
                        </Animate>
                    </div>

                    <div className='finish-line' />
                </div>
```
