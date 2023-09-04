import { FC } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";

const FormPage: FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Имя слишком короткое!")
      .required("Имя обязательно для заполнения"),
    author: Yup.string().required("Автор обязателен для заполнения"),
    year: Yup.number()
      .required("Год обязателен для заполнения")
      .positive("Год должен быть положительным числом")
      .integer("Год должен быть целым числом"),
    rating: Yup.number()
      .required("Рейтинг обязателен для заполнения")
      .min(1, "Рейтинг должен быть не меньше 1")
      .max(10, "Рейтинг не может быть больше 10"),
  });

  const initialValues = {
    name: "",
    author: "",
    year: "",
    rating: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Название</label>
            <Field
              as={TextField}
              id="outlined-basic"
              label="Название"
              variant="outlined"
              name="name"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="author">Автор</label>
            <Field
              as={TextField}
              id="outlined-basic"
              label="Автор"
              variant="outlined"
              name="author"
            />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="year">Год</label>
            <Field
              as={TextField}
              id="outlined-basic"
              label="Год"
              variant="outlined"
              name="year"
              type="number"
            />
            <ErrorMessage name="year" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="rating">Рейтинг</label>
            <Field
              as={TextField}
              id="outlined-basic"
              label="Рейтинг"
              variant="outlined"
              name="rating"
              type="number"
            />
            <ErrorMessage name="rating" component="div" className="error" />
          </div>
          <div>
            <button type="submit">Отправить</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormPage;
