import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

import { Formik } from 'formik';
import * as Yup from 'yup';

import CheckboxComponent from '../components/Checkbox';
import InputComponent from '../components/Input';

export default function SignInCardComponent() {
  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido.')
      .required('Informe seu e-mail.'),
    password: Yup.string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres.')
      .required('Informe sua senha.'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, values, touched, handleChange, handleSubmit }) => (
        <div className="flex flex-column surface-card p-4 shadow-2 border-round lg:w-4 absolute h-screen justify-content-center">
          <div className="text-center mb-5">
            <Image
              src="/images/logo.svg"
              width="100"
              height="100"
              alt="UnBHUB"
            />
            <div className="text-900 text-3xl font-medium mb-3">
              Entre no UnBHUB
            </div>
            <div>Conecte-se para explorar sua vida universitária</div>
          </div>
          <div>
            <InputComponent
              label="Endereço de E-mail"
              value={values.email}
              setValue={handleChange('email')}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm mb-2">{errors.email}</div>
            )}

            <InputComponent
              label="Senha"
              value={values.password}
              setValue={handleChange('password')}
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm mb-2">{errors.password}</div>
            )}

            <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">
                <CheckboxComponent />
              </div>
              <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
                Esqueceu sua senha?
              </a>
            </div>

            <Button
              label="Entrar"
              type="submit"
              onClick={handleSubmit}
              className="py-3 px-8 w-full text-white my-3"
            />

            <div className="flex justify-content-center align-content-center my-3">
              <span className="text-600 font-medium ">
                Ainda não tem uma conta?
              </span>
              <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
                Cadastrar-se
              </a>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
