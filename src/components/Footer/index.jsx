import { Section } from "../Proyecto"
import { Container, Row, Col } from 'reactstrap'
import { PhoneCall, Email } from "../../Icons"
import styled from "styled-components"
import Image from '../../assets/images/montanas.png'

const Anchor = styled.a`
    color:var(--azul);
    font-size:1.25rem;
    text-decoration:none;
`
const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:120px;
`
const MontanasContainer = styled.div`
    background-image: url(${Image});
    width: 100%;
    height: 200px;
`

const Footer = () => {
    return(
        <Section>
            <Container>
                <Row>
                    <Col md="6">
                        <Card>
                            <PhoneCall color="var(--azul)"/>
                            <Anchor href="tel:+595981055655">+59 59 8105 5655</Anchor>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <Email color="var(--azul)"/>
                            <Anchor href="mailto:mail@mail.com">mail@mail.com</Anchor>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <MontanasContainer/>
        </Section>
    )
}
export default Footer