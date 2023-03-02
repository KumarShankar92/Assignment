import React, { useState } from "react";
import { Stepper } from 'react-form-stepper';
import { useDispatch } from 'react-redux';
import { setData } from '../store/Actions';
import {
    Form,
    Input,
    Label,
    FormFeedback,
  } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import './styles.css';

const LoginScreen= () => {
  const dispatch = useDispatch();
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
    
        initialValues: {
         fullName: "",
         displayName: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
            .required("Please Enter Full Name"),
            displayName: Yup.string().required("Please Enter Display Name"),
        
        }),
    
        onSubmit: async (values) => {
         console.log(values)
         let dispatchOBj={
          counter:2,
          value:values
         }
         dispatch(setData({Data : dispatchOBj}));
        },
      });
  return (
    <div className='form'>
    <div>
      <Stepper
         steps={[{ label: '' }, { label: '' }, { label: '' }, { label: '' }]}
        activeStep={0}
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
          <h2 className='summary__heading'>Welcome! first things first...</h2>
          <span className='summary__item-title'>You can always change them later</span>
          <div className="mt-4">
                      <Form
                        className="form-horizontal"
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        <div className="mb-3">
                          <Label className="form-label">Full Name</Label>
                          <Input
                            name="fullName"
                            className="form-control login-input"
                            placeholder="Enter Full Name"
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.fullName || ""}
                            invalid={
                              validation.touched.fullName &&
                              validation.errors.fullName
                                ? true
                                : false
                            }
                            onDropCapture={(event) => {
                              event.preventDefault();
                            }}
                           
                            maxLength={50}
                            
                          />
                          {validation.touched.fullName &&
                          validation.errors.fullName ? (
                            <FormFeedback type="invalid">
                              {validation.errors.fullName}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label className="form-label">Display Name</Label>
                          <div className="input-group auth-pass-inputgroup">
                            <Input
                              name="displayName"
                              value={validation.values.displayName || ""}
                              className="login-input"
                              type={"text"}
                              placeholder="Enter Display Name"
                              onChange={validation.handleChange}
                              onDropCapture={(event) => {
                                event.preventDefault();
                              }}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.displayName &&
                                validation.errors.displayName
                                  ? true
                                  : false
                              }
                              maxLength={25}
                              onPaste={(event) => {
                                event.preventDefault();
                                return false;
                              }}
                            />

                            {validation.touched.displayName &&
                            validation.errors.displayName ? (
                              <FormFeedback type="invalid">
                                {validation.errors.displayName}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </div>
                        <div className="login-btn-wrap  d-grid">
                          <button
                            className="login-btn btn-block buttons__button--next"
                            type="submit"
                          >
                            Create Workflow
                          </button>
                        </div>
                      </Form>
    
                    </div>
    </div>
  </div>
  );
};

export default LoginScreen;