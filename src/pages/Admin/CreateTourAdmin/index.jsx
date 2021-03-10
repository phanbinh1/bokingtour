import React from 'react';
import { useState } from 'react';
import { Input, Row,Col, Button } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function CreateTourAdmin() {
   const [indexInput, setIndexInput] = useState(0);
   const [arrayInput, setArrayIndexInput] = useState([]);
   console.log("index array: ",arrayInput);

   const createIndextDay = ()=>{
      setIndexInput(indexInput+1);
      setArrayIndexInput([...arrayInput, indexInput]);
      createInputDay();
      console.log("index array: ",arrayInput);
   }

   const createInputDay = ()=>{
      return arrayInput.map((InputItem, InputIndex)=>{
         return(
            <Row>
            <Col span="24">
               <h4>ngày thứ {InputItem + 1}</h4>
               {/* <Input style={{marginTop:"20px"}}></Input> */}
               <Field  
                     name = "text"          
                  >
                     {(props)=>renderCustomInput({
                     ...props,
                     field: {
                        ...props.field,
                        placeholder:'Enter password',
                        type:'password',
                              },
                              })
                     }
                  </Field>
               <Button type="primary" onClick={()=>deleteIndextDay(InputIndex)}>xóa ngày</Button>
            </Col>
         </Row>
         )
      })
   }

   const deleteIndextDay = (index) =>{
      const newArrayInput = [...arrayInput];
      newArrayInput.splice(index,1);
      setArrayIndexInput(newArrayInput);
   }

   const renderCustomInput=(props)=>{
      console.log("props-field-meta", props);
      const {field, meta}=props;
      return(
        
           <div>
              <Input
                  style={{marginTop:"20px"}}
                 {...field}
                 type= {field.type}
              />
              {meta.touched && meta.error ? <div style={{color:"red"}}> {meta.error}</div>: null}
           </div>
        
      )
     }
      
   return(
      <>
      <Row>
         <Col span="12">
            <h1>thêm tour mới</h1>
            <form  action="" style={{ marginLeft:"10px"}}>
               <Button type="primary" onClick={()=>createIndextDay()}>Thêm ngày</Button>
               

               {/* <Input style={{marginTop:"20px"}}></Input>
               {createInputDay()} */}
            </form>

            <Formik
               initialValues={
                  {
                    text:"",
                  }
               }
               validationSchema={Yup.object({
                  text: Yup.string()
                     .required('Bạn chưa nhập email')
               })}
               // onSubmit={(values)=> handleSubmitSignIn(values)}
            >
               <Form  style={{ marginLeft:"10px"}}>
                  <Field  
                     name='text'
                  >
                     {(props)=>renderCustomInput({
                                 ...props,
                                 field: {
                                 ...props.field,
                                 placeholder:'Enter email',//thêm placeholder và type vào field
                                 type:'email',
                              },
                              })
                              }
                  </Field>
                  {/* password */}
                  

                  {createInputDay()}
               </Form>
      
      </Formik>
            
         </Col>
      </Row>
      
      </>
   );
}
export default CreateTourAdmin;