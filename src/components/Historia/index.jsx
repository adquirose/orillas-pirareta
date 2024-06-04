import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"

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
const Historia = () => {
    return(
        <Section id="historia">
            <Container>
                <Row>
                    <Col lg="8" className="mx-auto text-center">
                        <H2>HISTORIA</H2>
                        <div style={{width:'100%'}}>
                            <Hr/>
                        </div>
                        <P className="pb-3">
                            En 1997, cuatro jóvenes músicos paraguayos se encontraban inspirados por la belleza de la ciudad de Piribebuy, específicamente en Piraretã. Cautivados por la mística del lugar, con su arroyo cristalino, piedras, vegetación y aire puro, encontraron en este entorno la desconexión perfecta de la monotonía de la ciudad.
                            <br/>
                            Fue en este escenario que escribieron los primeros acordes de un tema que trascendió la historia musical del país, a la que llamaron Piraretã en honor al lugar que les inspiró. 
                            <br/>
                            La melodía capturó la esencia de la belleza natural que los rodeaba y reflejó la magia del lugar en cada nota. Con el paso del tiempo, Piraretã se convirtió en un himno para la ciudad de Piribebuy y una representación musical de la conexión entre la naturaleza y el alma humana. 
                            <br/>
                            La música de estos cuatro jóvenes se volvió un legado que perduró en la historia musical del país, recordando siempre la belleza y la inspiración que encontraron en aquel lugar místico.
                            <br/>
                            Estos 4 jóvenes paraguayos, son los integrantes de la icónica BANDA PAIKO, quienes han sido sin dudas un poderoso influenciador de la escena por más de 20 años y es considerada una banda icono y de las más representativas del país, posicionando más de dos docenas de canciones en alta rotación en radios de manera ininterrumpida.

                        </P>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Historia