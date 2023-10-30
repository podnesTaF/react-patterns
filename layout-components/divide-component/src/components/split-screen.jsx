import PropTypes from 'prop-types'; 
import {styled} from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Panel = styled.div`
    flex: ${p => p.flex};
`

const SplitScreen = ({children, leftWidth = 1, rightWidth = 1}) => {
    const [left, right] = children
    return (
        <Container>
            <Panel flex={leftWidth}>
                {left}
            </Panel>
            <Panel flex={rightWidth}>
                {right}
            </Panel>
        </Container>
    )
}

SplitScreen.propTypes = {
    children: PropTypes.children,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number
}

export default SplitScreen;