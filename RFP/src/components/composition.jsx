
export const Button = ({size, color, text, ...props}) => {
    return (
        <button {...props} style={{
            fontSize: size === 'small' ? "12px" : "32px",
            backgroundColor: color
        }}>
            {text}
        </button>
    )
}

export const RedButton = props => {
    return(
        <Button {...props} color={"crimson"} />
    )
}

export const GreenSmallBtn = props => {
    return <Button {...props} color="green" size={'small'} />
}

const Composition = () => {
  return (
    <div>Composition</div>
  )
}

export default Composition