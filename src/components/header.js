import React, { Component } from 'react';


class Header extends Component {

    hello = () => {
        console.log('I was clicked');
    }

    render (){
        return (
            <header>
                <div 
                className='logo'
                onClick={this.hello}
                >Logo</div>
                <input/>
            </header>
        )
    }
}


export default Header;