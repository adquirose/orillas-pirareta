import { 
    HeaderContainer, 
    ImageBg, 
    WsContainer, 
    ElementContainer, TextoContainer, Parrafo,
    ElementImage, FirmaContainer, P, FirmaImage, 
    MontanaImage} from './styles'
import styled from 'styled-components'

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

const Header = () => {
    return(
        <HeaderContainer>
            <ImageBg/>
            <ElementContainer>
                <ElementImage/>
            </ElementContainer>
            <WsContainer>
                Whatsappp
            </WsContainer>
            <TextoContainer>
                <Parrafo>
                    En 1997, cuatro jóvenes músicos paraguayos se encontraban inspirados por la belleza de la ciudad de Piribebuy, 
                    específicamente en Piraretã. Cautivados por la mística del lugar, con su arroyo cristalino, piedras, 
                    vegetación y aire puro, encontraron en este entorno la desconexión perfecta de la monotonía 
                    de la ciudad.<br/>

                    Fue en este escenario que escribieron los primeros acordes de un tema que trascendió la historia 
                    musical del país, a la que llamaron Piraretã en honor al lugar que les inspiró. <br/>

                    La melodía capturó la esencia de la belleza natural que los rodeaba y reflejó la magia del lugar 
                    en cada nota. Con el paso del tiempo, Piraretã se convirtió en un himno para la ciudad de Piribebuy 
                    y una representación musical de la conexión entre la naturaleza y el alma humana. <br/>

                    La música de estos cuatro jóvenes se volvió un legado que perduró en la historia musical del país, 
                    recordando siempre la belleza y la inspiración que encontraron en aquel lugar místico.<br/>

                    Estos 4 jóvenes paraguayos, son los integrantes de la icónica BANDA PAIKO, quienes han sido 
                    sin dudas un poderoso influenciador de la escena por más de 20 años y es considerada una 
                    banda icono y de las más representativas del país, posicionando más de dos docenas de 
                    canciones en alta rotación en radios de manera ininterrumpida.<br/>
                </Parrafo>
            </TextoContainer>
            <FirmaContainer>
                <P>
                    Volvimos para quedarnos, <br/>vení vos tambien.
                </P>
                <FirmaImage/>
            </FirmaContainer>
            <MontanaImage/>
        </HeaderContainer>
      
    )
}
export default Header