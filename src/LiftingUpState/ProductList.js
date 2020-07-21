import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    renderProList = () => {
        return this.props.proList.map((item, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <Product handleSelectPro={this.handleSelectPro} item={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row" >
                {this.renderProList()}
            </div>
        )
    }
}

export default ProductList
