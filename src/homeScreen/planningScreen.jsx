import React, { useState } from "react";
import { Stepper } from 'react-form-stepper';
import './styles.css';
import { useDispatch } from 'react-redux';
import { setData } from '../store/Actions';


const PlanningScreen = () => {
    const dispatch = useDispatch();
    const submit=()=>{
        console.log("hii")
        let dispatchOBj={
            counter:4,
            value:{}
           }
           dispatch(setData({Data : dispatchOBj})); 
    }
    return (
        <div className='form'>
            <div>
                <Stepper
                    steps={[{ label: '' }, { label: '' }, { label: '' }, { label: '' }]}
                    activeStep={2}
                    styleConfig={{
                        activeBgColor: '#664DE5',
                        activeTextColor: '#fff',
                        inactiveBgColor: '#fff',
                        inactiveTextColor: '#2b7cff',
                        completedBgColor: '#664DE5',
                        completedTextColor: '#fff',
                        size: '2em'
                    }}
                    className={'stepper'}
                    stepClassName={'stepper__step'}
                />
                <h2 className='summary__heading'>How are you Planning to use Eden!</h2>
                <span className='summary__item-title'>We will streamline your setup accordingly</span>
                <div className='summary'>
           
            <div className='summaryPart'>
            <h6 className='summary__heading'>For myself</h6>
            <br></br>
                <span className='summary__item-text'>write better,Think more clearly,stay organised</span>
            </div>
            <div className='summaryPart2'>
            <h6 className='summary__heading'>With my team</h6>
             <br></br>
                <span  className='summary__item-text'>wikis,docs,task& projects,all in one place</span>
             
            </div>
          </div>
                <div className='buttons'>
                    <button className='buttons__button buttons__button--next' onClick={submit} type='submit'>Create Workspace</button>
                </div>
            </div>
            {/* <LinaerStepper steps={count}></LinaerStepper> */}
        </div>
    );
};

export default PlanningScreen;