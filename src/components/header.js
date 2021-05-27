import React, { Component } from 'react';


class Header extends Component {

    hello = () => {
        console.log('I was clicked');
    }

    inputChange () {
        console.log('user typed something...')
    }

    render (){
        return (
            <header>
                <div 
                className='logo'
                onClick={this.hello}
                >Logo</div>
                <input
                onChange={this.inputChange}
                />
            </header>
        )
    }
}


export default Header;