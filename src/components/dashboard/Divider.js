import './Divider.css'
import React from 'react';

var promptclass = 'scroll-prompt';

class Divider extends React.Component
    {
    constructor(props)
        {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollRef = React.createRef();
        this.state =
            {
            hide: false
            }
        }

    componentDidMount()
        {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        }
    
    componentWillUnmount()
        {
        window.removeEventListener('scroll', this.handleScroll)
        }
    
    handleScroll(event)
        {
        // do something like call `this.setState`
        // access window.scrollY etc
        if(window.scrollY > 300)
            {
            this.setState({hide: true})
            }
        else
            {
            this.setState({hide: false})
            }
        }

    scrollDown(e) {
        e.current.scrollIntoView({behavior: 'smooth'});
    }


    render() {

        var textPromptClass = this.state.hide ? 'scroll-prompt hide' : 'scroll-prompt blinking';
        var arrowPromptClass = this.state.hide ? 'hide' : '';

        return (
            <div className="dividerBack">
                <p 
                className={textPromptClass}
                onClick={() => this.scrollDown(this.scrollRef)}
                >
                    Scroll down to find out more
                </p>

                {/*DOWN ARROW*/}
                <center>
                <svg className={arrowPromptClass} width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={() => this.scrollDown(this.scrollRef)}>
                    <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                </svg>
                </center>
                <div ref={this.scrollRef}></div>
            </div>
        );
    }
}


export default Divider;