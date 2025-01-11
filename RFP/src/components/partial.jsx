
const partialComponent = (Component, partialProps) => {
  return props => {
    return <Component {...partialProps} {...props} />
  }
}

export default partialComponent

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

export const RedButton = partialComponent(Button, {color: "red"})

export const SmallRedButton = partialComponent(RedButton, {size: "small"})