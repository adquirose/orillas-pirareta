import { 
    HeaderContainer, 
    ImageBg, 
    WsContainer, 
    ElementContainer, 
    ElementImage, TextoContainer, FirmaContainer, P, FirmaImage, Parrafo, 
    MontanaImage} from './styles'
import styled from 'styled-components'

import { Button } from 'reactstrap'

export const SectionHeaderContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    height:80vh;
    position:relative;
`
// export const HeaderContainer = styled.div`
//     display:flex;
//     position:relative;
//     background-image: url(${Img});
//     background-position:center;
//     background-size:cover;
//     height: ${props => props.$height? props.$height: '90vh'};
//     overflow: hidden;
//     @media(min-width:992px){
//         height: 100%;
//         min-height: 650px;
//         min-width: 992px:
//         padding-top: 0;
//         padding-bottom: 0;
//     }
// `
export const Elemento = styled.img`
    position:absolute;
    left:calc(50vw - 225px);
    top:20%;
    height:540px;
    width:auto;
    z-index:5;
` 
// const TextContainer = styled.div`
//     width:100%;
//     display:flex;
   
//     justify-content:center;    
//     flex-direction:column;
//     padding-left:4rem;
// `
const WrapperText = styled.div`
    height:400px;
    width:60%;
    overflow-y:auto;
    justify-self:center;
` 
export const H1 = styled.h1`
    font-size: 4.75rem;
    font-family: "adobe-arabic", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-shadow: 1px 1px 2px #212529, 0 0 1em #212529, 0 0 0.2em #212529;
    padding-top: 90px;
    color:white;
    text-align:center;
    @media(min-width:992px){
        font-size: 4.75rem !important;
    }
    @media(max-width:576px){
        font-size: 3.5rem !important;
    }
`
const Descripcion = styled.p`
    font-size: 1rem;
    z-index:6;
    justify-self:center;
`
const Span = styled.span`
    font-size:28px;
    background:red;
    width:320px;
    align-self:end;
    margin-right:160px;
    padding-top:32px;
    
    
`
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