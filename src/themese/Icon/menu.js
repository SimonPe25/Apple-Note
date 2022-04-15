export const menu = ({ color, className, stroke }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width="4.2mm" height="2.2mm" version="1.1" shapeRendering="geometricPrecision"   
        fill="red" 
        viewBox="0 0 600 400"
         >
         <g id="Слой_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"/>
          <line fill={color} stroke={stroke} strokeWidth="30" strokeMiterlimit="22.9256" x1="15.04" y1="33.3" x2="586.62" y2= "33.3" />
          <line fill={color}  stroke={stroke} strokeWidth="30" strokeMiterlimit="22.9256" x1="15.04" y1="148.03" x2="586.62" y2= "148.03" />
          <line fill={color} stroke={stroke} strokeWidth="30" strokeMiterlimit="22.9256" x1="15.04" y1="262.77" x2="586.62" y2= "262.77" />
          <line fill={color}  stroke={stroke} strokeWidth="30" strokeMiterlimit="22.9256" x1="15.04" y1="383.76" x2="586.62" y2= "383.76" />
         </g>
        </svg>
    )
}


