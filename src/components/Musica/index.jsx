import { Sound, VolumeMute } from '../../Icons'
import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import AudioFile from '../../assets/paiko.mp3'
 
const MusicaContainer = styled.div`
    position:fixed;
    bottom:30px;
    right:30px;
    cursor:pointer;
    z-index:1;
`
const Musica = () => {
    const [playing, setPlaying] = useState(false)
    const [colorBtn, setColorBtn] = useState('var(--blanco)')
    const [audio] = useState(new Audio(AudioFile)) 

    const handleClick= () => {
        setPlaying(!playing)  
    }
    useEffect(() => {
        playing ? audio.play() : audio.pause()
    },[audio, playing])

    useEffect(() => {
        const updateBtnMusica = () => { 
            if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70 ){
                setColorBtn('var(--azul)')
            }else{
                setColorBtn('var(--blanco)')
            }
        }
        window.addEventListener("scroll", updateBtnMusica);

        return function cleanup() {
            window.removeEventListener("scroll", updateBtnMusica);
      };
    },[])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      },[]);

    return(
        <MusicaContainer onClick={handleClick}>
            {   playing ? 
                <Sound color={colorBtn}/>:
                <VolumeMute color={colorBtn}/>
            }
        </MusicaContainer>
    )
}
export default Musica