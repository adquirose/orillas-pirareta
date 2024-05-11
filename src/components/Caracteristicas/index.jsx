import { Container, Row, Col } from "reactstrap"
import { Section } from "../Proyecto"
import WaterSink from '../../Icons/water-sink.svg?react'
import Handshake from '../../Icons/handshake.svg?react'
import Image from '../../Icons/image.svg?react'

const Caracteristicas = () => {
    return(
        <Section $background="var(--blanco)">
            <Container>
                <Row>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <Image width="60" height="60" color="var(--azul)"/>
                        <h3 className="pt-3">Características</h3>
                        <p className="text-center pt-3">
                            El Eco Barrio &quot;Orillas de Pirareta&quot; se distingue por ofrecer un entorno 
                            natural excepcional, proporcionando a sus residentes la oportunidad de 
                            desconectarse de la monotonía urbana. Destacan el arroyo Yhaguy en toda 
                            su majestuosidad y el Mirador Paiko, brindando vistas panorámicas de las 
                            serranías. Además, cuenta con zonas de relajación junto al arroyo, 
                            complementadas por un muelle inspirador, que añaden un toque único a 
                            la experiencia del lugar.
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <WaterSink width="60" height="60" color="var(--azul)"/>
                        <h3 className="pt-3">Servicios</h3>
                        <p className="text-center pt-3">
                            En el Eco Barrio, se garantiza acceso a servicios esenciales como agua 
                            y electricidad en toda el área. Cuenta con un portón de acceso y servicio 
                            de portero para mayor seguridad. Los terrenos, a partir de 360 m2, ofrecen 
                            vistas panorámicas y proximidad al arroyo Yhaguy. Destaca el Mirador Paiko, 
                            proporcionando una vista especial de la serranía. Con un entorno tranquilo 
                            y las medidas de seguridad necesarias, este lugar es ideal para construir 
                            el hogar de tus sueños.
                        </p>
                    </Col>
                    <Col lg="4" md="6" sm="12" className="d-flex flex-column align-items-center">
                        <Handshake width="60" height="60" color="var(--azul)"/>
                        <h3 className="pt-3">Trámite de venta</h3>
                        <p className="text-center pt-3">
                            El proceso de trámites de venta en nuestro Eco Barrio es sencillo y 
                            transparente. Solo necesitas presentar tu cédula de identidad para 
                            iniciar el proceso. Luego, llenas el contrato y la solicitud de datos, 
                            proporcionando la información necesaria. El siguiente paso es realizar 
                            el pago de la seña, y ¡listo!, el terreno es tuyo. Destacamos que no 
                            realizamos consultas en Informconf, simplificando aún más el proceso 
                            para que puedas asegurar tu espacio en nuestro Eco Barrio de manera 
                            rápida y eficiente.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>

    )
}
export default Caracteristicas