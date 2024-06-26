
// eslint-disable-next-line react/prop-types
function PhoneCall({width=36, height=36, color="#4c4c4a"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="4">
                <path d="M28,2A18,18,0,0,1,46,20" fill="none"/>
                <path d="M28,10A10,10,0,0,1,38,20" fill="none"/>
                <path d="M31.041,28.94l-3.423,4.279A36.116,36.116,0,0,1,14.782,20.384l4.279-3.423a2.908,2.908,0,0,0,.84-3.45L16,4.728a2.908,2.908,0,0,0-3.39-1.635L5.186,5.019A2.925,2.925,0,0,0,3.028,8.25,43.142,43.142,0,0,0,39.751,44.973a2.925,2.925,0,0,0,3.23-2.158l1.926-7.425A2.91,2.91,0,0,0,43.273,32l-8.782-3.9A2.907,2.907,0,0,0,31.041,28.94Z" fill="none" stroke={color}/>
            </g>
        </svg>
	);
}

export default PhoneCall;