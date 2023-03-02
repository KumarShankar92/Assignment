import React, { useState } from "react";
import { Stepper } from 'react-form-stepper';
import './styles.css';





const SummaryScreen = () => {
    return (
        <div className='form'>
            <div>
                <Stepper
                   steps={[{ label: '' }, { label: '' }, { label: '' }, { label: '' }]}
                    activeStep={3}
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
                <h2 className='summary__heading'>Congratulation,Eren!</h2>
                <span className='summary__item-title'>You have completed onboarding,you can start using the Eden!</span>
                <div class="circle">
                    <div class="checkmark"></div>
                </div>
                <div className='buttons'>
                    <button className='buttons__button buttons__button--next' type='submit'>Launch Eden</button>
                </div>
            </div>
        </div>
    );
};

export default SummaryScreen;