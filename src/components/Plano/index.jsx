import { Section } from '../Proyecto'
import { Container, Row, Col } from 'reactstrap'
import { Titulo } from '../Contacto'
import { ButtonHeader } from '../Header'

const Plano = () => {
    return(
        <Section $background="var(--verde)">
            <Container>
                <Row>
                    <Col>
                        <Titulo color="var(--azul)">PLANO PROYECTO</Titulo>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col className="mx-auto text-center">
                        <ButtonHeader $backgroundColor="var(--azul)" $color="var(--blanco)" onClick={() => window.open('../../assets/plano.pdf','_blank')}>DESCARGAR</ButtonHeader>
                    </Col>
                </Row>
            </Container>
            
           
        </Section>
    )
}
export default Plano