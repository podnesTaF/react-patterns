import React from 'react'
import Form from './form'
import styled from 'styled-components'
import { spaceSchema } from '../../utils/common/spaces'

const fractions = {
    "1/4": "1fr 3fr",
    "1/3": "1fr 2fr",
    "1/2": "1fr 1fr",
    "2/3": "2fr 1fr",
    "3/4": "3fr 1fr",
    "auto-start": "auto 1fr",
    "auto-end": "1fr auto",
  };

export const Split = styled.div`
    display: grid;
    gap: ${props => spaceSchema[props.gutter] ?? spaceSchema.lg};
    grid-template-columns: ${({fraction}) => fractions[fraction] ?? fractions['1/2']}; 
`

const InfoForm = () => {
  return (
    <Split fraction={'1/3'} gutter="xl">
        <div>
            <h3>General Information</h3>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis unde eligendi sunt nesciunt, maiores distinctio maxime optio ad neque a et similique natus est ut eveniet quod error rerum consequatur!
            </span>
        </div>
        <Form />
    </Split>
  )
}

export default InfoForm