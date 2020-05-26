import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

class TestCrud extends React.Component{
  constructor(props) {
    super(props);
    this.textFieldComponent = React.createRef();
    this.state = {
      listaNome: ['teste 1', 'teste 2', 'teste 3'],
      textFieldValue: '',
      modoEdicao: null
    };

    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
    // localStorage.setItem('listaNome', []);
    //console.log(localStorage.getItem('listaNome'));
    // localStorage.getItem('listaNome') != null ?
    //                 JSON.parse(localStorage.getItem('listaNome')) : [] 

// useEffect(() => {
//   // Update the document title using the browser API
//   //document.title = `You've clicked ${count} times.`;
//   console.log(props, document);
//   const textFieldComponent = React.createRef();
// });

  adicionarNome(){
    if(this.state.textFieldValue.length > 0 && !this.state.listaNome.includes(this.state.textFieldValue)){
        if(!this.state.modoEdicao){
          const listaNomes = this.state.listaNome;
            this.setState(
              {
                listaNome:  [ ...initialArray, this.state.textFieldValue ] listaNomes.unShift(this.state.textFieldValue),
                TextFieldValue: ''
              });
        }
        else{
            //console.log("EDIT MODE", modoEdicao, typeof modoEdicao, textFieldValue);
              //setListaNome(listaNome.filter((val, idx) => (modoEdicao !== idx) ? val : 'VAI CARAI'));
              
              //setListaNome(['VAI CARAI 1', 'VAI CARAI 2']);
              //setModoEdicao(null);
              //setTextFieldValue('');
        }
      }
  }

  editarNome(value, index){
      this.setState({TextFieldValue:value, ModoEdicao :index });
      this.textFieldComponent.current.focus();
  }

  removerNome(index){
      // setListaNome(listaNome.filter((val, idx) => index !== idx));
  }

  onChangeHandle(event) {
    this.setState({textFieldValue: event.target.value});
  }

render(){
  return (
      <div>
          <div style={{fontSize: 20, marginBottom: 20}}> Cadastro de nomes</div>
          <form autoComplete="off" onSubmit= {(event)=> 
              {
                  event.preventDefault();
                  this.adicionarNome();
              }
          }>
              <TextField autoFocus ref={this.textFieldComponent} label="Nome" value={this.state.textFieldValue} 
              onChange={this.onChangeHandle} />
          </form>
          <br></br>
          <List>
                {
                  this.state.listaNome.map((value, index) =>
                  <ListItem key={index} onClick={() => this.editarNome(value, index)}>
                    <ListItemText
                      primary={value}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" onClick={()=> this.removerNome(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
      </div>
      );
  }
}

export default TestCrud