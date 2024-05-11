import { Section } from "../Proyecto"
import { Container, Row, Col } from "reactstrap"
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { Titulo } from '../Contacto'

const containerStyle = {
	width: "100%",
	height: "520px",
	maxHeight: "520px",
};	 

const spot = { lat: -25.5070566907216, lng: -56.94816683579724  };
const center = { lat: -25.5070566907216, lng: -56.94816683579724  };

const Map = () => {
	return (
		<LoadScript googleMapsApiKey="AIzaSyBX-fT0cZLTKydQN_HFfeCfHKq_Um_4cSQ">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={11}
				mapTypeId="roadmap"
			>
				<Marker position={spot} />
			</GoogleMap>
		</LoadScript>
	);
}

const Ubicacion = () => {
    return(
        <Section $background="var(--blanco)" id="ubicacion">
            <Container>
                <Row>
                    <Col>
                        <Titulo color="var(--negro)">UBICACIÓN</Titulo>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col>
                        <Map/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export default Ubicacion