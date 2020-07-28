import React, { Component } from 'react'

class XucXac extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                <div className="bau-cua__xoay bau-cua__xoay--1">
                    <img src="./img/bau.png" alt="hinhanh" />
                </div>
                <div className="bau-cua__xoay bau-cua__xoay--2">
                    <img src="./img/bau.png" alt="hinhanh" />
                </div>
                <div className="bau-cua__xoay bau-cua__xoay--3">
                    <img src="./img/bau.png" alt="hinhanh" />
                </div>
            </div>
        )
    }
}

export default XucXac
