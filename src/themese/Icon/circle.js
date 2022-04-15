export const circle = ({ color, className, id }) => {

    return (
        <svg id={id} viewBox="0 0 450 450" className={className}  width="3.1mm" height="3.1mm" fill={color}>
            <circle cx="225" cy="225" r="211.66"/>
        </svg>
    )
}

