import styled from "styled-components"
import { spaceSchema } from "../../utils/common/spaces"

export const Layers = styled.div`
    display: grid;
    gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.lg};
`

const SubscribeForms = () => {
  return (
    <Layers gutter={'xl'}>
        <Layers gutter={'md'}>
            <h2>Subscribe to our newsletter</h2>
            <p>Subscribe to our newsletter to get the latest news, updates and offers</p>
        </Layers>

        <Layers>
            <Layers gutter={'sm'}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </Layers>
            <Layers gutter={'sm'}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </Layers>

            <button>Subscibe</button>
        </Layers>
    </Layers>
  )
}

export default SubscribeForms