import React, {useState} from 'react';
import {calculateSalaryFrom} from '../utils/calculoSalario';
import ProgressBarSalary from './ProgressBarSalary';
import InputReadOnly from './InputReadOnly';
import InputFullSalary from './InputFullSalary';

import { Divider, Grid  } from '@material-ui/core';

const TrabalhoModulo3 = ()=>{

    const [salary, setSalary] = useState('');
    const [baseInss, setBaseInss] = useState(0);
    const [descontoInss, setDescontoInss] = useState(0);
    const [baseIrpf, setBaseIrpf] = useState(0);
    const [descontoIrpf, setDescontoIrpf] = useState(0);
    const [salarioLiquido, setSalarioLiquido] = useState(0);

    const changeSalary = (value) =>{
        setSalary(value);
        const calculo = calculateSalaryFrom(value);

        setBaseInss(calculo.baseINSS);
        setDescontoInss(calculo.discountINSS);
        setBaseIrpf(calculo.baseIRPF);
        setDescontoIrpf(calculo.discountIRPF);
        setSalarioLiquido(calculo.netSalary);
    };

    return(
      <>
        <h1>React Salário</h1>

        <InputFullSalary props = {["Digite o salário bruto", salary, changeSalary]} />

        <Grid justify="center" spacing={3} container>
            <Grid item xs={12} sm={3} style={{textAlign: 'center'}}>
                <InputReadOnly props={["Base INSS:", baseInss, '', 'yellow']} />
            </Grid>
            <Grid item xs={12} sm={3} style={{textAlign: 'center'}}>
                <InputReadOnly props={["Desconto INSS:", descontoInss, salary, 'yellow']} />
            </Grid>
            <Grid item xs={12} sm={3} style={{textAlign: 'center'}}>
                <InputReadOnly props={["Base IRPF:", baseIrpf, '', 'yellow']} />
            </Grid>
            <Grid item xs={12} sm={3} style={{textAlign: 'center'}}>
                <InputReadOnly props={["Desconto IRPF:", descontoIrpf, salary,'yellow']} />
            </Grid>
        </Grid>

        <br/>

        <InputReadOnly props={["Salário Líquido:", salarioLiquido, salary, 'yellow']} />

        <br/>
        <br/>
        <ProgressBarSalary props={[descontoInss, descontoIrpf, salarioLiquido]}/>
      </>
    );
}

export default TrabalhoModulo3