import React, { Component } from "react";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      number: 1,
    };
  }
  static getDerivedStateFromProps(
    props,
    state //Props mới và state hiện tại
  ) {
    console.log("getDerivedStateFromProps");
    return null; //Trả về state mới
  }

  render() {
    console.log("render");
    return (
      <div>
        {this.state.number}
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
          className="btn btn-primary"
        >
          +
        </button>
      </div>
    );
  }
  //Chạy sau khi render và chỉ chạy 1 lần duy nhất
  componetDidmount() {
    console.log("componetDidmount");
  }

  componentDidUpdate(prevProps, prevState) {
    //prevProps: là props mới, prevState: state mới
    //chạy sau  render và chạy khi state hoặc props thay đổi
    //Lưu ý:  không  setState trong life cycle này sẽ đi vào lặp vô tận.
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //Chạy khi component bị khóa khỏi giao diện
    console.log("componentWillUnmount");
  }
}
