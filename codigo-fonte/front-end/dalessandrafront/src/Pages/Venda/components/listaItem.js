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
import { Paginator } from 'primereact/paginator';

const ListaItem = () => {
    const [listaClientes, setListaClientes] = useState([]);
    const [listaItem, setListaItem] = useState([]);

    useEffect(() => {
        const carregarClientes = async () => {
            const headers ={"Content-Type":"application/json"}
            try{
                // const response = await axios.get(config.URL+'cliente');
                // setListaClientes(response.data);
                const response = await axios.get(config.URL+'estoque', {headers});
                setListaItem(response.data?.content);
            } catch(error){
                console.log(error)
            }
        };

        carregarClientes();
    }, []);

    return (
        <dialog id="modalListaItem" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Lista de Itens</h3>
                <Card className="w-full flex-col">
                    <List>
                        {listaItem.map(item => (
                            <ListItem key={item.id}>
                                <ListItemPrefix>
                                    {item.codProduto}
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        {item.nomeProduto }
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                       {"Qtd em estoque: " + item.qtdAtual + " Tamanho: " + item.tamanho}
                                    </Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Card>
                <Paginator 
                    first={1} 
                    rows={10} 
                    totalRecords={50} 
                    // onPageChange={onPageChange} 
                    template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} 
                />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ListaItem;
