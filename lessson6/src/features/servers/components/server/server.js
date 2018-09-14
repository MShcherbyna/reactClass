import React, {Component} from 'react';
import {TextEditor} from '../../../../shared/components/text-editor/text-editor';

export class ServerComponent extends React.Component {
  state = {
    isInEditMode: false
  }

  toggleEditMode = () => {
    this.setState((prevState) => {
      return {
        isInEditMode: !prevState.isInEditMode
      }
    });
  }

  render() {
    const {isInEditMode} = this.state;
    const {name} = this.props;
    return  (
        <div className="server__item">
          <TextEditor
            isInEditMode = {isInEditMode}
            className = "server_item-title"
            value={name}
          />
          <button className="server_item-edit" onClick={this.toggleEditMode}>Edit Server</button>
        </div>
    )
  }
}