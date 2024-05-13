import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../../../config/config";
import {
    List,
    ListItem,
    ListItemPrefix,
    Card,
    Typography,
} from "@material-tailwind/react";
import { Paginator } from 'primereact/paginator';

const ListaItem = ({ onItemSelected }) => {
    const [listaItem, setListaItem] = useState([]);
    const [totalItens, setTotalItens] = useState(0);
    const [first, setFirst] = useState(0);

    useEffect(() => {
        const carregarClientes = async () => {
            const headers ={"Content-Type":"application/json"}
            try{
                const response = await axios.get(config.URL+`estoque?tamanhoPagina=${5}`, {headers});
                setListaItem(response.data?.content);
                setTotalItens(response.data?.totalElements);
            } catch(error){
                console.log(error)
            }
        };

        carregarClientes();
    }, []);

    const onPageChange = async (event) => {
        setFirst(event.first);
        const headers ={"Content-Type":"application/json"}
        try{
            const response = await axios.get(config.URL+`estoque?tamanhoPagina=${5}&pagina=${event.page}`, {headers});
            setListaItem(response.data?.content);
        } catch(error){
            console.log(error)
        }
    }

    const handleItemClick = (nomeProduto) => {
        onItemSelected(nomeProduto);
    }

    return (
        <dialog id="modalListaItem" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Lista de Itens</h3>
                <Card className="w-full flex-col">
                    <List>
                        {listaItem.map(item => (
                            <ListItem key={item.id} onClick={() => handleItemClick(item.nomeProduto)}>
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
                    first={first} 
                    rows={5} 
                    totalRecords={totalItens} 
                    onPageChange={onPageChange} 
                    template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} 
                />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Fechar</button>
                    </form>
                </div>
            </div>
        </dialog>
    ); 
}

export default ListaItem;
