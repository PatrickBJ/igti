const calculaPorcentagem = (value, total, parenteses) => 
{
  if(total == null || total === '' || value == null || value == 0)
    return '';

  const valueNumber = parseFloat(value);
  const totalNumber = parseFloat(total);
  const result = ((valueNumber/totalNumber)* 100).toFixed(2).replace(".",",");
  return (parenteses == null || parenteses === true) ? `(${result} %)`: `${result} %`;
}

const converteValor = (value) => 
{
  if(value == null || value == 0)
    return "0,00";

  const valueNumber = parseFloat(value);
  const result = valueNumber.toFixed(2).replace(".",",");
  return result;
}

export { calculaPorcentagem, converteValor}