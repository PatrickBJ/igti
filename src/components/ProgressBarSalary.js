import React from 'react';

const ProgressBarSalary = (props)=>{

    const [descontoInss, descontoIrpf, salarioliquido] = props.props;
    const corBarraDescontoInss = '#e67e22';
    const corBarraDescontoIrpf = '#c0392b';
    const corBarraSalarioLiquido = '#16a085';

    return(
      <>
        <div style={{display: 'grid', height: '1rem', gridTemplateColumns:`${descontoInss}fr ${descontoIrpf}fr ${salarioliquido}fr`}}>
            <div className='subBar' style={{backgroundColor:corBarraDescontoInss}}/>
            <div className='subBar' style={{backgroundColor:corBarraDescontoIrpf}}/>
            <div className='subBar' style={{backgroundColor:corBarraSalarioLiquido}}/>
        </div>
      </>
    );
}

export default ProgressBarSalary