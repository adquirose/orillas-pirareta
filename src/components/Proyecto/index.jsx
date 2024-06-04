import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { Button } from 'reactstrap'

export const ButtonHeader = styled(Button)`
    border-radius:300px;
    background-color:${props => props.$backgroundColor ? props.$backgroundColor: 'white'};
    border-color:${props => props.$backgroundColor ? props.$backgroundColor: 'white'};
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    padding: 1rem 2rem;
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
    color:${props => props.$color ? props.$color: 'black'};
    &:hover{
        background-color:${props => props.background ? props.background: 'white'};
        border-color:${props => props.background ? props.background: 'white'}; 
        color:${props => props.color ? props.color: 'black'};
    }
    
`
export const Section = styled.section`
    background:none;
    padding:5rem 0 0 0;
`
const H2 = styled.h2`
    font-size:2rem;
    color:var(--azul);
`
const P = styled.p`
    color: rgba(var(--azul), 0.7);
    font-size:1rem;
`
const Hr = styled.hr`
    border-width:3px;
    max-width:50px;
    border-color:var(--azul);
    opacity:1;
    margin: 1.5rem auto;
`
const Proyecto = () => {
    return(
        <Section id="proyecto">
            <Container>
                <Row>
                    <Col lg="8" className="mx-auto text-center">
                        <H2>EL PROYECTO</H2>
                        <div style={{width:'100%'}}>
                            <Hr/>
                        </div>
                        <P className="pb-3">
                            El Eco Barrio &quot;Orillas de Pirareta&quot; emerge como un refugio único, donde la arena blanca, 
                            las aguas cristalinas del arroyo Yhaguy y las impresionantes vistas se combinan para ofrecer una 
                            escapada rejuvenecedora de la monotonía de la ciudad. Este lugar no solo te brinda una experiencia 
                            natural única, sino también zonas de relax y el imponente Mirador Paiko, 
                            que añade una dimensión especial a la experiencia.
                            <br/><br/>
                            Crecer Inmobiliaria y Paiko se enorgullecen de presentar el lanzamiento del eco 
                            barrio &quot;Orillas de Pirareta&quot;, donde las cuotas, a partir de 490.000 guaraníes, 
                            te permiten formar parte de este entorno que te regala historias, inspiración y, 
                            sobre todo, la posibilidad de reconectar con la naturaleza.
                        </P>
                        <ButtonHeader $color="var(--blanco)" $backgroundColor="var(--azul)" href="#masterplan">Mira el Masterplan 360º</ButtonHeader>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Proyecto

