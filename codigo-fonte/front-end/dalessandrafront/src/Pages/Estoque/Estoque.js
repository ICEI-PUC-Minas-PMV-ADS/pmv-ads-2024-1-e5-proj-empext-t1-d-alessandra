
import axios from "axios";
import { useEffect, useState } from "react";



function Estoque(){

    const [estoque, setEstoque] = useState([])


    
    //#endregion    console.log(estoque)

        function obeterEstoque(){
            //console.log("Obter Estoque")
            const headers ={
                "Content-Type":"application/json"
                }
                axios.get('http://localhost:8080/estoque',{headers})
                .then((response) => {
                    console.log(response.data)
                    setEstoque(response.data)
                    //console.log(response.status)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

       // obeterEstoque()

    return(
        <div>
            <h1>f</h1>
            <button onClick={obeterEstoque}>Obter Estoque</button>  
        </div>
    )



}export default Estoque;