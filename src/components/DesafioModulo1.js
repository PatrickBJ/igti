import React, { useState, useEffect } from 'react';
import { TextField, Divider, Typography, Grid, ListItemAvatar, Avatar  } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import dataSet from './dataExample.json';

export default function DesafioModulo1(){

const [listaUsuarios, setListaUsuarios] = useState(null);
const [listaUsuariosFiltrados, setListaUsuariosFiltrados] = useState([]);

function BuscarUsuario(pesquisa){
  if(listaUsuarios != null && pesquisa != null && pesquisa.length > 0){
    setListaUsuariosFiltrados(listaUsuarios.filter( (u) => (u.name.first.toLowerCase()+u.name.last.toLowerCase()).includes(pesquisa.toLowerCase())));
  }
  else{
    setListaUsuariosFiltrados([]);
  }
 }

async function BuscarUsuarios(){
  try
  {
    const fetchUsuarios = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
    //const usuarios = dataSet;
    const usuarios = await fetchUsuarios.json();
    setListaUsuarios(usuarios.results);
  }
  catch(ex)
  {
    console.log("Erro ao carregar dados");
  }

}

 useEffect(() => {
    if(listaUsuarios == null){
      BuscarUsuarios();
      }
 });

return (
    <div>
        <div style={{fontSize: 20, marginBottom: 20}}> Pesquisa de usuários</div>
        <form autoComplete="off">
            <TextField autoFocus style={{width: "100%"}} id="textField" label="Nome" onChange={(e)=>{BuscarUsuario(e.target.value)}} />
        </form>
        
        <Divider />
        <Grid container >
          <Grid item xs={6} style={{textAlign: 'center'}}>
          <Typography variant="h5" style={{marginTop : 20}}> {listaUsuariosFiltrados.length > 0 ? listaUsuariosFiltrados.length+" usuário(s) selecionado(s)" : "Nenhum usuário filtrado" } </Typography>
          <List>
              { 
                listaUsuariosFiltrados.map( (usuario, index) => 
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar src={usuario.picture.thumbnail} />
                  </ListItemAvatar>
                  <ListItemText 
                    style={{textAlign: 'center'}}
                    primary={usuario.name.first + " "+usuario.name.last+", "+ usuario.dob.age}
                  />
                </ListItem>
            )}
          </List>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'center'}}>
          <Typography variant="h5" style={{marginTop : 20}}> {listaUsuariosFiltrados.length > 0 ? "Estatísticas":"Nada a ser exibido" } </Typography>
          {listaUsuariosFiltrados.length > 0 && 
            <div>
              <Typography style={{padding : 10}}>Sexo Masculino: {listaUsuariosFiltrados.reduce((sum, u) => u.gender === "male" ? sum+1:sum, 0 ) }</Typography>
              <Typography style={{padding : 10}}>Sexo Feminino: {listaUsuariosFiltrados.reduce((sum, u) => u.gender === "female" ? sum+1:sum, 0 ) }</Typography>
              <Typography style={{padding : 10}}>Soma das idades: {listaUsuariosFiltrados.reduce((sum, {dob:{age}}) => sum+ age, 0 )}</Typography>
          <Typography style={{padding : 10}}>Média das idades: {(listaUsuariosFiltrados.reduce((sum, {dob:{age}}) => sum+ age, 0 )/listaUsuariosFiltrados.length).toFixed(2)}</Typography>
           </div>
          }
        </Grid>
        </Grid>
    </div>
    );
}