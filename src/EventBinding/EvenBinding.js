import React, { Component } from 'react'

export default class EvenBinding extends Component {

    //Phuong thuc
    handleClick = () => {
        alert('HELLO VU BANG BEE')
    }

    showMessage = (mess) =>  {
        alert("Hello "+ mess)
    }

    render() {
        return (
            <div>

                {/**Cách 1: Truyen theo callback function xử lý sự kiện */}
                <h3>Cách 1: Callback Function</h3>
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={this.showMessage.bind(this,'HEHE')}>Click me!</button>
                <br/>
                <hr/>

                {/* Cách 2: arrow function*/}
                <h3>Cách 2: Dùng Arow Function</h3>
                <button onClick = {() => {
                    this.handleClick();
                }}>Click me</button>
                
                <button onClick = {() => {
                    this.showMessage('Bee');
                }}>Click</button>
            </div>
        )
    }
}
