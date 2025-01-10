import styled from 'styled-components'
import PropTypes from 'prop-types'


const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    overflow: auto;
    background-color: #00000070;
    width: 100%;
    height: 100%;
`

const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background-color: wheat;
    width: 50%;
`

const ControlledModal = ({open, onClose, children}) => {

  return (
    <>
    {open && (
        <ModalBackground onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Hide Modal</button>
            {children}
        </ModalContent>
    </ModalBackground>
    )}
    </>
  )
}

ControlledModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.children
}

export default ControlledModal