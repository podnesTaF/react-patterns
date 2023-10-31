import React, { useState } from "react";
import PropTypes from "prop-types";

const UncontrolledFlow = ({ children, onFinish }) => {
  const [data, setData] = React.useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentStepIndex];

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;

    const newData = {
      ...data,
      ...dataFromStep,
    };

    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      onFinish(newData);
    }

    setData(newData);
  };

  if(React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {goNext})
  } else {
    return currentChild
  }
};

UncontrolledFlow.propTypes = {
  onFinish: PropTypes.func,
  children: PropTypes.any,
};

export default UncontrolledFlow;
