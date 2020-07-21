import React, { PureComponent } from 'react'
import data from "./data.json";
import Product from './Product';
import ProductList from './ProductList';
import Card from './Card';

class ExampleCard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            proList: data,
            proSelected: null,
        }

    }
    handleSelectPro = (pro) => {
        this.setState({
            proSelected: pro,
        })
    }

    //Cấu trúc  render dùng lại nhiều


    render() {
        return (
            <div>
                <div className="container">
                    <Card />
                    <ProductList handleSelectPro={this.handleSelectPro} proList={this.state.proList} />
                    {this.state.proSelected ? (<div className="row">
                        <div className="col-sm-5">
                            <img className="img-fluid" src={this.state.proSelected.hinhAnh} />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{this.state.proSelected.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{this.state.proSelected.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{this.state.proSelected.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{this.state.proSelected.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{this.state.proSelected.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{this.state.proSelected.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>) : null}

                </div>
            </div>

        )
    }
}

export default ExampleCard