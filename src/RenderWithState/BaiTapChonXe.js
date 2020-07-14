import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: './img/black-car.jpg'
    }

    changeColor = (color) => {
        let imgColor = `./img/${color}-car.jpg`;
        //Setstate cho src tấm hình thay ydodoir để giao diện render  lại
        this.setState({
            srcImg:imgColor
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.srcImg} alt="black car" />
                    </div>
                    <div className="col-6">
                   
                        <div className="row">
                            <div className="col-3">
                                <button onClick={()=>{
                                    // this.setState({
                                    //     srcImg: './img/red-car.jpg'
                                    // })
                                    this.changeColor('red');
                                }} className="btn text-white" style={{ backgroundColor: 'red' }}>Red color </button>
                            </div>
                            <div className="col-3">
                                <button onClick={()=>{
                                    this.changeColor('black');
                                }} className="btn text-white" style={{ backgroundColor: 'black' }}>Black color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={()=>{
                                    this.changeColor('silver');
                                }} className="btn text-white" style={{ backgroundColor: 'silver' }}>Silver color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={()=>{
                                    this.changeColor('steel');
                                }} className="btn" style={{ backgroundColor: 'steel' }}>Steel color</button>
                            </div>




        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
