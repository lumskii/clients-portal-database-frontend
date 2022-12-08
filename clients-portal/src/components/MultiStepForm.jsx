import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Field, FieldArray, FieldProps, Form, Formik, getIn } from "formik";
import * as React from "react";
// import { generate } from "shortid";
import * as yup from "yup";
import { DashBoard } from "../pages/Dashboard/DashboardElements";
import Header from "./Heading"

const validationSchema = yup.object().shape({
  people: yup.array().of(
    yup.object().shape({
      firstName: yup.string().max(10),
      lastName: yup.string().min(2),
    })
  ),
});

const Input = ({ field, form: { errors } }: FieldProps) => {
  const errorMessage = getIn(errors, field.name);

  return (
    <>
      <TextField {...field} />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
};

const MultiStepForm = () => {
  

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
        <Header title="CLIENT FORM" subtitle="Add a new title" />
        <>
          <div style={{ textAlign: "center" }}>
            <Formik
              initialValues={{
                people: [{ id: "5", firstName: "bob", lastName: "bob2" }],
              }}
              onSubmit={() => {}}
              validationSchema={validationSchema}
            >
              {({ values, errors }) => (
                <Form>
                  <FieldArray name="people">
                    {({ push, remove }) => (
                      <div>
                        {values.people.map((p, index) => {
                          return (
                            <div key={p.id}>
                              <Field
                                name={`people[${index}].firstName`}
                                component={Input}
                              />
                              <Field
                                name={`people[${index}].lastName`}
                                component={Input}
                              />
                              <div onClick={() => remove(index)}>x</div>
                            </div>
                          );
                        })}
                        <Button
                          type="button"
                          onClick={() =>
                            push({
                              id: 0,
                              firstName: "",
                              lastName: "",
                            })
                          }
                        >
                          add to list
                        </Button>
                      </div>
                    )}
                  </FieldArray>
                  <div>
                    <Button type="submit">submit</Button>
                  </div>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                  <pre>{JSON.stringify(errors, null, 2)}</pre>
                </Form>
              )}
            </Formik>
          </div>
        </>
      </Box>
    </DashBoard>
  );
};

export default MultiStepForm;
