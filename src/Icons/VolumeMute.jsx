/* eslint-disable react/prop-types */

const VolumeMute = ({height=48, width=48, color="var(--blanco)"}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 48 48">
            <g fill={color} className="nc-icon-wrapper">
                <path d="M35.074,32.1a1,1,0,0,1-.706-1.708A9.105,9.105,0,0,0,35.815,19.5a1,1,0,0,1,1.736-.994A11.106,11.106,0,0,1,35.78,31.808.994.994,0,0,1,35.074,32.1Z" fill={color}></path>
                <path d="M40.746,37.7a1,1,0,0,1-.709-1.7A16.991,16.991,0,0,0,45,24a17.186,17.186,0,0,0-3.393-10.173,1,1,0,0,1,1.6-1.2A19.206,19.206,0,0,1,47,24a18.983,18.983,0,0,1-5.544,13.408A1,1,0,0,1,40.746,37.7Z" fill={color}></path>
                <path d="M6,34H9.758L31,12.758V4a1,1,0,0,0-1.591-.807L14.673,14H6a5.006,5.006,0,0,0-5,5V29A5.006,5.006,0,0,0,6,34Z" fill={color}></path>
                <path d="M16.732,35.51l12.677,9.3A1,1,0,0,0,31,44V21.242Z" fill={color}></path>
                <path data-color="color-2" d="M3,46a1,1,0,0,1-.707-1.707l42-42a1,1,0,1,1,1.414,1.414l-42,42A1,1,0,0,1,3,46Z"></path>
            </g>
        </svg>
    )
}
export default VolumeMute