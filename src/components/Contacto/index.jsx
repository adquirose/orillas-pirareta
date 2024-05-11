import { useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Input, FormGroup } from 'reactstrap'
import styled from 'styled-components'
import { Section } from '../Proyecto'
import { ButtonHeader } from '../Header'
// import TagManager from 'react-gtm-module'
import { useNavigate } from 'react-router-dom'

export const Titulo = styled.h2`
    font-size:2rem;
    color:${props => props.color ? props.color : 'var(--blanco)'};
    margin-bottom:1.25rem;
    text-align:center;
`
const Textarea = styled(Input)`
    height:148px;
    color:var(--azul);
    @media(max-width:576px){
        height:90px;
        font-size:12px
    }
`
const InputText = styled(Input)`
    height:38px;
    color:var(--azul);
    @media(max-width:576px){
        height:28px;
        font-size:12px
    }
`

const INITIAL_STATE = {nombre:'', email:'', telefono:'', mensaje:''}

export const Formulario = () => {
    const [data, setData] = useState(INITIAL_STATE)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()

        const { nombre, email, telefono, mensaje } = data 
        const message = `
            <div>
                <p>Nombre: ${nombre} </p>
                <p>Email: ${email} </p>
                <p>Telefono: ${telefono}</p>
                <p>Mensaje: ${mensaje}</p>
            </div>
        `
        const info = {
            to:'',
            replyTo: email,
            subject:'Formulario Contacto',
            text:'Orillas de Pirareta',
            html: message,
            nombre: nombre,
            email: email,
            telefono:telefono,
        }
        setIsLoading(true)

        axios.post('https://us-central1-firemailer.cloudfunctions.net/submitContactoFZ', info,{ headers: { "Access-Control-Allow-Origin": "*" }})
            .then(res => {
                console.log(res.data.message)
                setIsLoading(false)
                setError('')
                setMessage('sus datos han sido enviados')
                setTimeout(() => setMessage(''),2000)
                // TagManager.dataLayer({
                //     dataLayer:{
                //         path:'/gracias/',
                //         event:'pageview'
                //     }
                // })
                navigate('/gracias')
                
            })
            .catch(err => {
                console.log(`ha ocurrido un error ${err}`)
                setError(err)
            })
            setData(INITIAL_STATE)  

    }
    const { nombre, email, telefono } = data
    const isDisabled = nombre === '' || email === '' || telefono === '' 
    return(
        <Form className="pt-3" onSubmit={handleOnSubmit}>
            <Row className='d-flex justify-content-center'>
                <Col lg="6" md="6" sm="6" xs="10">
                    <FormGroup>
                        <InputText
                            type="text" 
                            placeholder="Nombre" 
                            name="nombre" 
                            value={data.nombre} 
                            onChange={handleOnChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputText 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            value={data.email} 
                            onChange={handleOnChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputText 
                            type="telefono" 
                            placeholder="Telefono" 
                            name="telefono" 
                            value={data.telefono} 
                            onChange={handleOnChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" xs="10">
                    <FormGroup>
                        <Textarea 
                            type="textarea" 
                            placeholder="Mensaje" 
                            name="mensaje" 
                            value={data.mensaje} 
                            onChange={handleOnChange}
                        />
                    </FormGroup>
                </Col>
                <Col className='text-center'>
                    <ButtonHeader $color="var(--azul)" disabled={isDisabled} type="submit">
                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                    </ButtonHeader>
                    <p style={{color:'white'}}>{message}</p>
                    {error && `${error}`}
                    
                </Col>
            </Row>
        </Form>
    )
}
const Contacto = () => {
    return(
        <Section id="contacto">
            <Container>
                <Row>
                    <Col>
                        <Titulo color="var(--azul)">CONTACTO</Titulo>
                    </Col>
                    <Formulario/>
                </Row>
            </Container>
        </Section>
    )
}
export default Contacto