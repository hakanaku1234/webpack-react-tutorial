import React, { Component } from 'react';
import Input from './Input';

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    // try catch 是 async await 捕获错误的方法
    try {
      const response = await fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      // 请求能够到达服务器，服务器返回了 500 或 400 等状态码，就会执行下面的语句
      // 执行之后，就会把错误抛出，被 catch 捕获到
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json })
    // 正常情况下，只有网络错误才会执行 catch
    } catch (error) {
      console.log(error);
    }
    // fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
    //   .then(response => response.json())
    //   .then(json => this.setState({data: json}))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li key={ el.name }>{ el.name } : { el.price_usd }</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FormContainer;
