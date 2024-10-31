// src/pages/listusers/ListUsers.jsx

import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Title, Container } from "./styles"; // Certifique-se de que esses estilos existem

function ListUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await api.get('/usuarios'); // Certifique-se de que a rota está correta
                setUsers(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <Container>
            <Title>Lista de Usuários</Title>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>
                            Nome: {user.name}, Idade: {user.age}, E-mail: {user.email}
                        </li>
                    ))
                ) : (
                    <li>Nenhum usuário cadastrado.</li>
                )}
            </ul>
        </Container>
    );
}

export default ListUsers;
