import React from 'react';
import {ServerComponent} from './components/server/server';
import {addServer} from '../../store/actions/server-actions/add-server'

import './components/server/server.css';
import {connect} from 'react-redux';

export class ServersComponent extends React.Component {
  addNewServer = () => {
    console.log(1111, this.props);
    const {addServer, servers} = this.props;
    addServer({
      name: "Server #" + servers.length
    })
  }
  render() {
    const {servers} = this.props;

    return  (
      <div>
      <ul>
        {
          servers.map((server) => {
            return (
              <li>
                <ServerComponent 
                  name={server.name}
                />
              </li>
            )
          })    
        }
      </ul>
      <button onClick={this.addNewServer}>ADD SERVER</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    servers: state
  }
}

const mapDispatchToPtops = {
  addServer
}

export const Servers = connect(mapStateToProps, mapDispatchToPtops)(ServersComponent);