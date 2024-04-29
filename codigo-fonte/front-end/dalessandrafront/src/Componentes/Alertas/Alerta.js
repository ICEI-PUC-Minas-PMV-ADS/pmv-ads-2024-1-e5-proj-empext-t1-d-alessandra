
import React, { useRef,useEffect } from 'react';
import "../../Pages/estilo/estoque.css";
import { Toast } from 'primereact/toast';
function AlertaNovo({ code }) {
  const toast = useRef(null)

  useEffect(() => {
      console.log(code)
    if (code === 200) {
        toast.current.show({severity: 'success', summary: 'Sucesso', detail: 'Ação realizada com sucesso!'});
    }
    else if(code === 400){
        toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Por Favor verifique todos os campos digitados' });
    }
    else if(code == 500){
        toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Erro interno' });
    }
}, [code]);
  return (
    <Toast ref={toast} />
    );
  }
  
  export default AlertaNovo;