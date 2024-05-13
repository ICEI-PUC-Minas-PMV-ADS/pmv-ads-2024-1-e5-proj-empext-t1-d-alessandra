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

const ModalCliente = ({ onItemSelected }) => {
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

    const handleItemClick = (codCliente) => {
        onItemSelected(codCliente);
    }

    return (
        <dialog id="modalListCliente" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Lista de clientes cadastrados</h3>
                <Card className="w-full flex-col">
                    <List>
                        {listaClientes.map(cliente => (
                            <ListItem key={cliente.id} onClick={() => handleItemClick(cliente.codCliente)}>
                                <ListItemPrefix>
                                    {cliente.codCliente}
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        {cliente.nomeCliente}
                                    </Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Card>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Fechar</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ModalCliente;
