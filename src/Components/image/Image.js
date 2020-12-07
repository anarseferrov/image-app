import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            spanCount: 1,
        }
    }
    componentDidMount() {
        // console.log(this.myRef)
        this.myRef.current.addEventListener('load', () => {
            // console.log(this.myRef.current.clientHeight);
            const spanim = Math.round(this.myRef.current.clientHeight / 5) + 2;
            this.setState({
                spanCount: spanim
            })
        })
    }

    render() {
        const { image } = this.props;
        return (
            <img key={image.id} src={image.urls.small} alt="" ref={this.myRef} style={{ gridRowEnd: `span ${this.state.spanCount}` }} />
        );
    }
}

export default Image;       