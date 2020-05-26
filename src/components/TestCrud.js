import React, { useState } from 'react';
import { TextField, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

export default function TestCrud(){

const [listaNome, setListaNome] = useState(['teste 1', 'teste 2', 'teste 3']);
const [textFieldValue, setTextFieldValue] = useState('');
const [modoEdicao, setModoEdicao] = useState(null);

function adicionarNome(){
   if(textFieldValue.trim().length > 0){
       if(modoEdicao == null){
         if(!listaNome.includes(textFieldValue)){
           setListaNome(listaNome => [...listaNome, textFieldValue]);
           setTextFieldValue('');
         }
       }
       else{
            listaNome[modoEdicao] = textFieldValue;
            setListaNome(listaNome);
            setModoEdicao(null);
            setTextFieldValue('');
       }
    }
}

function editarNome(value, index){
    setTextFieldValue(value);
    setModoEdicao(index);
 }

function removerNome(index){
    setListaNome(listaNome.filter((val, idx) => index !== idx));
 }

return (
    <div>
        <div style={{fontSize: 20, marginBottom: 20}}> Cadastro de nomes</div>
        <form autoComplete="off" onSubmit= {(event)=> 
            {
                event.preventDefault();
                adicionarNome();
            }
        }>
            <TextField autoFocus id="textField" label="Nome" value={textFieldValue} onChange={(event)=>setTextFieldValue(event.target.value)} />
        </form>
        
        <Divider />
          <List>
            {
              listaNome.map((value, index) =>
              <ListItem button key={index} onClick={() => editarNome(value, index)}>
                <ListItemText
                  primary={value}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={()=> removerNome(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
    </div>
    );
}