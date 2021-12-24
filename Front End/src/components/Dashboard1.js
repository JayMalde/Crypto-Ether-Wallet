import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Account from './Account';
import Transactions from './Transactions';
import Send from './Send';
import Balance from './Balance';
import Instruction from './Instruction';
import Message from './Message';
import Logout from './Logout';

library.add(faArrowUp, faArrowDown);

class Dashboard1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {
        address: '',
        publicKey: '',
        privateKey: ''
      },
      balance: '',
      message: ''
    }
  }

  onUpdateAccount = (account) => {
    this.setState({
      account: account
    });
  }

  onUpdateMessage = (message) => {
    this.setState({
      message: message
    });
  }

  render() {
    return (
      <div className="app">
        <hr/>
        <div className="container">
        <div className="row">
          <div className="col-6">
            <Balance address={this.state.account.address} onUpdateMessage={this.onUpdateMessage} />
          </div>
          <div className="col-3">
           <Instruction />
          </div>
          <div className="col-3">
           <Logout />
          </div>
        </div>
        </div>
        <Message message={this.state.message} />
        <div className="container mt-2">
          <div className="row">
            <div className="col-6">
              <Account account={this.state.account} onUpdateAccount={this.onUpdateAccount} />
            </div>
            <div className="col-6">
              <Send account={this.state.account} onUpdateMessage={this.onUpdateMessage} />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
            </div>
            <div className="col-6">
              <Transactions address={this.state.account.address} onUpdateMessage={this.onUpdateMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard1;
