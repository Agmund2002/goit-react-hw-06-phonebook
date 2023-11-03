import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Label, ModernErrorMessage, ModernField, ModernForm } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(10, 'Short phone number')
    .max(22, 'Long phone number')
    .required('Required'),
});

export const ContactForm = ({onAdd}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <ModernForm>
        <Label>
          Name
          <ModernField name="name" placeholder="Jane Doe" />
          <ModernErrorMessage component="span" name="name" />
        </Label>

        <Label>
          Phone number
          <ModernField type="tel" name="number" placeholder="+38(099)-000-0000" />
          <ModernErrorMessage component="span" name="number" />
        </Label>

        <Button type='submit'>Add contact</Button>
      </ModernForm>
    </Formik>
  );
};
