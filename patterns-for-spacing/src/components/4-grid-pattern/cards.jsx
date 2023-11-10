import React from 'react'
import Card from './card'
import styled from 'styled-components'
import { spaceSchema } from '../../utils/common/spaces'

export const Grid = styled.div`
    display: grid;
    gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema['lg']};
    grid-template-columns: repeat(auto-fit, minmax(min(${props => props.minItemWidth ?? "310px"}, 100%), 1fr));
`

const Cards = () => {
  return (
    <Grid gutter="xl">
        <Card />
        <Card />
        <Card />
        <Card />
    </Grid>
  )
}

export default Cards