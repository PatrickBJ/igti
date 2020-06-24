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
  const valueNumber = parseFloat(value);
  const result = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(valueNumber);
  return result;
}

export { calculaPorcentagem, converteValor}