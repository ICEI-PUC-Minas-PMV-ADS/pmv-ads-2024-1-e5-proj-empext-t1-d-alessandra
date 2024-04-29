import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../../../config/config";
import { Tag } from 'primereact/tag';
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";
import { cpf } from 'cpf-cnpj-validator'; 

const ModalCliente = () => {
    const [listaClientes, setListaClientes] = useState([]);
    useEffect(() => {
        const carregarClientes = async () => {
            const headers ={"Content-Type":"application/json"}
            try{
                const response = await axios.get(config.URL+'cliente');
                setListaClientes(response.data);
            } catch(error){
                console.log(error)
            }
        };

        carregarClientes();
    }, []);

    return (
        <dialog id="modalListCliente" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Lista de clientes cadastrados</h3>
                <Card className="w-full flex-col">
                    <List>
                        {listaClientes.map(cliente => (
                            <ListItem key={cliente.id}>
                                <ListItemPrefix>
                                    {cliente.codCliente}
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        {cliente.nomeCliente}
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                       {cpf.format(cliente.cpfCnpj)}
                                    </Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Card>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ModalCliente;
