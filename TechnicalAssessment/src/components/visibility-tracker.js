import React from 'react'

/*
Credit goes to Alexander Kondov
https://hackernoon.com/tracking-element-visibility-with-react-and-the-intersection-observer-api-7dfaf3a47218
*/
class VisibilityTracker extends React.Component {

    ref = React.createRef()
  
    async componentDidMount() {
      const observer = new IntersectionObserver(
        ([entry]) => {
          this.props.onVisible(entry.intersectionRatio === 1) // true if fully visible
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      )
  
      if (this.ref.current) {
        observer.observe(this.ref.current)
      }
    }
  
    render() {
      return <div ref = {this.ref}>{this.props.children}</div>
    }
}

export default VisibilityTracker