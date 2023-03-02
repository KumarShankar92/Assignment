import React, { useState } from "react";
import { Stepper } from 'react-form-stepper';
import { useDispatch } from 'react-redux';
import { setData } from '../store/Actions';;
import {
    Form,
    Input,
    Label,
    FormFeedback,
  } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import './styles.css';

const WorkSpace= () => {
  const dispatch = useDispatch();
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
    
        initialValues: {
         workSpaceName: "",
         url:""
        },
        validationSchema: Yup.object({
            workSpaceName: Yup.string()
            .required("Please Enter WorkSpace Name"),
            url: Yup.string()
        
        }),
    
        onSubmit: async (values) => {
          let dispatchOBj={
            counter:3,
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
        activeStep={1}
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
          <h2 className='summary__heading'>Let's setup a home for all your work</h2>
          <span className='summary__item-title'>You can always create another work space later</span>
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
                          <Label className="form-label">Workspace Name</Label>
                          <Input
                            name="workSpaceName"
                            className="form-control login-input"
                            placeholder="Enter Full Name"
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.workSpaceName || ""}
                            invalid={
                              validation.touched.workSpaceName &&
                              validation.errors.workSpaceName
                                ? true
                                : false
                            }
                            onDropCapture={(event) => {
                              event.preventDefault();
                            }}
                           
                            maxLength={50}
                            
                          />
                          {validation.touched.workSpaceName &&
                          validation.errors.workSpaceName? (
                            <FormFeedback type="invalid">
                              {validation.errors.workSpaceName}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label className="form-label">Workspace URL</Label>(optional)
                          <div className="input-group auth-pass-inputgroup">
                            <Input
                              name="url"
                              value={validation.values.displayName || ""}
                              className="login-input"
                              type={"url"}
                              placeholder="Enter url name"
                              onChange={validation.handleChange}
                              onDropCapture={(event) => {
                                event.preventDefault();
                              }}
                            //   onBlur={validation.handleBlur}
                              maxLength={25}
                              onPaste={(event) => {
                                event.preventDefault();
                                return false;
                              }}
                            />
                          </div>
                        </div>
                        <div className="login-btn-wrap  d-grid">
                          <button
                            className="login-btn btn-block buttons__button--next"
                            type="submit"
                          >
                            Create Workspace
                          </button>
                        </div>
                      </Form>
    
                    </div>
    </div>
    {/* <LinaerStepper steps={count}></LinaerStepper> */}
  </div>
  );
};

export default WorkSpace;