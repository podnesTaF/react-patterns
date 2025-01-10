import React from "react";

const ControlledFlow = ({ children, onFinish, currentIndex, onNext }) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goNext = (dataFromStep) => {
    onNext(dataFromStep)
  }

  if(React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {goNext})
  } else {
    return currentChild
  }
};

export default ControlledFlow