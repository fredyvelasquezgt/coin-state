import React, { Component } from 'react';
import Coin from './Coin'

class CoinContainer extends Component {
    static defaultProps = {
        title:"Lets flip a coin"
    }
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>
                <Coin title={this.props.title} />
            </div>
        )
    }
}

export default CoinContainer;