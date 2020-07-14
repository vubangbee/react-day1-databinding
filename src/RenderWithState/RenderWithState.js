import React, { Component } from 'react'

export default class RenderWithState extends Component {

    // this.state: Thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện. Đây là thuộc tính có sẵn của component

    state = {
        isLogin : false
    }

    // isLogin = false;
    //Nháy đơn với giá trị biến
    userName = 'Bang';

    renderContent = () => {
        if(this.state.isLogin) {
        return <p>Hello {this.userName}</p>
        }
        return <button onClick={() => this.login()}>Đăng Nhập</button>
    }

    login = () => {
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);
        // this.render();
        let newState = {
            isLogin : true
        }

        //Phương thức this.setState là 1 phương thức có sẳn của component làm 2 nhiệm vụ. 1 là thay đổi giá trị state,  2 là gọi this.render lại giao diện.
        // this.setState  là phương thức  bất đồng bộ.
        this.setState(newState)
    }

    render() {
        return (
            <div>
                
                RenderWithState: Render với điều kiện if else
            { this.renderContent()}
                {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>Đăng Nhập</button>} */}

            </div>
        )
    }
}
