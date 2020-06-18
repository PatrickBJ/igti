async function BuscarUsuarios(){
    let result = [];
    try
    {
      const fetchUsuarios = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
      const usuarios = await fetchUsuarios.json();
      result = usuarios.results;
    }
    catch(error)
    {
      throw error;
    }
  
    return result;
}

export default BuscarUsuarios;