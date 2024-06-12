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
import { Paginator } from 'primereact/paginator';

const ModalCliente = ({ onItemSelected }) => {
    const [listaClientes, setListaClientes] = useState([]);
    const [filtroNome, setFiltroNome] = useState("");
    const [first, setFirst] = useState(0);
    const [totalItens, setTotalItens] = useState(0);

    useEffect(() => {
        const carregarClientes = async () => {
            const headers = { "Content-Type": "application/json" };
            try {
                const response = await axios.get(config.URL + `cliente/find?nomeCliente=${filtroNome}&page=${0}&size=${5}`);
                setListaClientes(response.data.content);
                setTotalItens(response.data?.totalElements);
            } catch (error) {
                console.log(error);
            }
        };

        carregarClientes();
    }, [filtroNome]);

    const handleItemClick = (codCliente) => {
        onItemSelected(codCliente);
    };

    const handleFiltroChange = (event) => {
        setFiltroNome(event.target.value);
    };

    const onPageChange = async (event) => {
        setFirst(event.first);
        const headers ={"Content-Type":"application/json"}
        try{
            const response = await axios.get(`${config.URL}cliente/find?nomeCliente=${filtroNome}&page=${event.page}&size=${5}`, { headers });
            setListaClientes(response.data?.content);
            setTotalItens(response.data?.totalElements);
        } catch(error){
            console.log(error)
        }
    }

    return (
        <dialog id="modalListCliente" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Lista de clientes cadastrados</h3>
                <input
                    type="text"
                    value={filtroNome}
                    onChange={handleFiltroChange}
                    placeholder="Filtrar por nome do cliente"
                    className="mb-4 p-2 border rounded w-full"
                />
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
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <Paginator 
                        first={first} 
                        rows={5} 
                        totalRecords={totalItens} 
                        onPageChange={onPageChange} 
                        template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} 
                    />
                </section>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Fechar</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ModalCliente;
