/* eslint-disable react/prop-types */

const Sound = ({height=48, width=48, color="var(--blanco)"}) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 48 48">
            <g fill={color} className="nc-icon-wrapper">
                <path data-color="color-2" d="M34.385,16.258a1,1,0,0,0,0,1.414,8.959,8.959,0,0,1-.014,12.67,1,1,0,1,0,1.412,1.416,10.959,10.959,0,0,0,.018-15.5A1,1,0,0,0,34.385,16.258Z"></path>
                <path data-color="color-2" d="M41.46,10.5A1,1,0,1,0,40.04,11.9,17.156,17.156,0,0,1,40.04,36,1,1,0,1,0,41.46,37.4,19.163,19.163,0,0,0,41.46,10.5Z"></path>
                <path d="M30.452,3.108a1,1,0,0,0-1.044.085L14.673,14H6a5.006,5.006,0,0,0-5,5V29a5.006,5.006,0,0,0,5,5h8.673L29.408,44.807A1,1,0,0,0,31,44V4A1,1,0,0,0,30.452,3.108Z" fill={color}>
                </path>
            </g>
        </svg>
    )
}
export default Sound
