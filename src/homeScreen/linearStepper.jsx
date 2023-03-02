import React, { useState } from "react";
import SummaryScreen from "./summaryScreen";
import { useSelector } from 'react-redux';
import LoginScreen from "./loginScreen";
import WorkSpace from "./workSpaceName";
import PlanningScreen from "./planningScreen";
import isEmpty from 'lodash/isEmpty';

import './styles.css';


function getStepContent(step) {
  console.log(step)
  switch (step) {
    case 1:
      return (
        <LoginScreen></LoginScreen>
      )
    case 2:
      return (
        <WorkSpace></WorkSpace>
      )
    case 3:
      return (
        <PlanningScreen></PlanningScreen>
      )
    case 4:
      return (
        <SummaryScreen></SummaryScreen>
      )
    default: return null
  }
}


const LinaerStepper = () => {
  const reduxValue = useSelector((state) => state.saveData);
  const [step, Setstep] = useState(1)
  React.useEffect(() => {
    if( !isEmpty(reduxValue.Data)){
      Setstep(reduxValue.Data.counter)
    }
   
  }, [reduxValue]);
  return (
    <>{getStepContent(step
      )}</>);


};

export default React.memo(LinaerStepper);