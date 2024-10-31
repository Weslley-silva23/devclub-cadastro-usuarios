import { useRef } from "react"

import api from "../../../services/api"


import { Title, Container, Topbackground, Form, Containerunputs, Input, Button, Inputlabel } from "./styles"

import Usersimage from "../../assets/users.png"

function ListUsersHome() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function RegisterNewUser() {
     await api.post('/usuarios', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value)
    })

    

  }


  return (

    <Container>

      <Topbackground>
        <img src={Usersimage}></img>
      </Topbackground>



      <Form>

        <Title>Cadastrar Usuários</Title>

        <Containerunputs>

          <div>
            <Inputlabel>
              Nome <span> *</span>
            </Inputlabel>
            <Input type="text" placeholder="Nome do Usuario:" ref={inputName} /> 
          </div>


          <div>
            <Inputlabel>
              Idade <span> *</span>
            </Inputlabel>
            <Input type="number" placeholder="Idade do Usuario:" ref={inputAge} />

          </div>

        </Containerunputs>

      <div style= {{width: '100%'}} >
        <Inputlabel>
          E-mail <span> *</span>
        </Inputlabel>
        <Input type="email" placeholder="E-mail do Usuario:" ref={inputEmail} />
        </div>


        <Button type="button" onClick={RegisterNewUser}>Cadastrar Novos Usuarios</Button>
      </Form>

    </Container>


  )

}

export default ListUsersHome