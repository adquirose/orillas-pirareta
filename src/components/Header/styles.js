import styled from 'styled-components'
import Background from './../../assets/images/header.jpg'
import Elemento from '../../assets/images/elemento-header.png'
import Firma from '../../assets/images/firma.png'
import Montana from '../../assets/images/montanas.png'

export const HeaderContainer = styled.div`
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    height:100vh;
    max-height:680px;
    width:100%;
    @media(max-width:920px){

    }
`
export const ImageBg = styled.div`
    background-image: url(${Background});
    background-position:center;
    background-size:cover;
    grid-column: 3 / 5;
    grid-row: 1/-1;
    @media(max-width:920px){
        grid-column: 1 / -1;
    }
`
export const WsContainer = styled.div`  
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    
    @media(max-width:920px){
        display:none;
    }
`
export const ElementContainer = styled.div`
    grid-column: 2/4;
    grid-row: 1/-1;
    display:flex;
    align-items:center;
    @media(max-width:920px){
        display:none;
    }
`
export const ElementImage = styled.img`
    width:100%;
    max-height:100%;
`
ElementImage.defaultProps = {
    src: Elemento,
};
export const TextoContainer = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
    overflow-y: auto;
    box-sizing: border-box;
`
export const FirmaContainer = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;
    display:flex;
    flex-direction:column;
    align-items: end;
    justify-content:start;
    @media(max-width:920px){
        display:none;
    }
`
export const P = styled.p`
    font-size:1.75rem;
    color:orange;
    text-align:center;
    width:70%;
    padding-top:1rem;
    margin:0;
    font-family:"Roboto Flex", sans-serif;
`
export const Parrafo = styled.p`
    font-size:1rem;
    text-align:left;
    width:100%;
    padding-left:56px;
    font-family:"Roboto Flex", sans-serif;
    @media(max-width:920px){
        display:none;
    }
`
export const FirmaImage = styled.img`
    width:60%;
    max-height:100%;
    padding-right:1.5rem;
`
export const MontanaImage = styled.div`
    background-image: url(${Montana});
    background-position:center;
    background-size:cover;
    width:100%;
    height:100px;
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    align-self:end;
    @media(max-width:920px){
        display:none;
    }
`
FirmaImage.defaultProps = {
    src:Firma,
};

