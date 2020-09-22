import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getClients, deleteClient } from '../redux/actions/client'
import stc from 'string-to-color'
import '../styles/banners.css'

const ClientDashboard = () => {

    const clients = useSelector((state) => state.clients.clients)
    const dispatch = useDispatch()

    const [deletingClient, setDeletingClient] = useState(false)

    useEffect(() => {
        dispatch(getClients());
    }, [])

    console.log(clients)

    const deleteClients = async (id) => {

        if (deletingClient) {
            return
        }

        console.log(id)

        try {
            setDeletingClient(true)
            let result = window.confirm("Estas seguro de eliminar este cliente?, recuerda que tambien se borrará de tu pagina de inicio")
            if(result == true) {
                await dispatch(deleteClient(id))
                window.location.replace('/dashboard/clientes')
            }
            setDeletingClient(false)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className="ClientDashboard">
            <div className="header-client">
                <p>Su galería de imagenes para sus clientes</p>
                <Link to="/dashboard/clientes/nuevo">Agregar cliente</Link>
            </div>
            <div className="container-gallery_client">
                {
                    clients && clients.length > 0 ? 
                    clients.map(client => (
                        <div className="client-item" key={client.id} style={{background: stc("pink"), borderRadius: "4px"} }>
                            <img src={client.image} alt="imagen cliente" style={{width: "60%", objectFit: "contain"}}/>
                            <p>{client.title}</p>
                            <button className="delete-client" onClick={()=>deleteClients(client.id)}><i className="fas fa-trash"></i></button>
                            <Link to={`/dashboard/clientes/editar/${client.id}`} className="edit-client"><i className="fas fa-pen"></i></Link>
                        </div>
                    )) : 
                    <p>Actualmente no tienes ningun cliente en tu sección de clientes, dale click agregar cliente para agregar un cliente</p>
                }
            </div>
        </div>
     );
}
 
export default ClientDashboard;