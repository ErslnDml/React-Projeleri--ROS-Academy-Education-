import React from 'react'
import { Formik, Field, Form } from 'formik';
import validation from "./validation";

import { useTodo } from '../../../contexts/ToDoContext';

function HeaderForm() {
  const{addTodo}=useTodo()
  return (

    <Formik
      initialValues={{
       text:"",
      }}
      onSubmit={ (values,bag) => {
        console.log(values);
        
       

        addTodo(values.text);

        bag.resetForm();
        
      }}
      validation={validation}
    >
      <Form>
        <Field id="text" name="text" className="new-todo" placeholder="Ne Yapılması Gerekiyor?" autoFocus />
      </Form>
    </Formik>
     
  )
}

export default HeaderForm
