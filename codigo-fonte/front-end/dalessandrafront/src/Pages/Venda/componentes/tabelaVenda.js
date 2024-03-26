import React from "react";

function TabelaVenda(){
    return(
        <div class="overflow-y-auto max-h-80">
            <table class="table table-xs table-pin-rows table-pin-cols">
                <thead>
                <tr>
                    <th>Nº</th>
                    <th>Nome</th>
                    <th>Codigo</th>
                    <th>Qtd</th>
                    <th>Preço Unitário</th>
                    <th>Valor Total</th>
                </tr>
                </thead> 
                <tbody>
                <tr>
                    <th>1</th> 
                    <td>Cy Ganderton</td> 
                    <td>Quality Control Specialist</td> 
                    <td>Littel, Schaden and Vandervort</td> 
                    <td>Canada</td> 
                    <td>12/16/2020</td>
                </tr>
                <tr>
                    <th>2</th> 
                    <td>Hart Hagerty</td> 
                    <td>Desktop Support Technician</td> 
                    <td>Zemlak, Daniel and Leannon</td> 
                    <td>United States</td> 
                    <td>12/5/2020</td>
                </tr>
                <tr>
                    <th>3</th> 
                    <td>Brice Swyre</td> 
                    <td>Tax Accountant</td> 
                    <td>Carroll Group</td> 
                    <td>China</td> 
                    <td>8/15/2020</td>
                </tr>
                <tr>
                    <th>4</th> 
                    <td>Marjy Ferencz</td> 
                    <td>Office Assistant I</td> 
                    <td>Rowe-Schoen</td> 
                    <td>Russia</td> 
                    <td>3/25/2021</td>
                </tr>
                <tr>
                    <th>5</th> 
                    <td>Yancy Tear</td> 
                    <td>Community Outreach Specialist</td> 
                    <td>Wyman-Ledner</td> 
                    <td>Brazil</td> 
                    <td>5/22/2020</td>
                </tr>
                <tr>
                    <th>6</th> 
                    <td>Irma Vasilik</td> 
                    <td>Editor</td> 
                    <td>Wiza, Bins and Emard</td> 
                    <td>Venezuela</td> 
                    <td>12/8/2020</td>
                </tr>
                </tbody> 
            </table>
        </div>
    )
}

export default TabelaVenda;