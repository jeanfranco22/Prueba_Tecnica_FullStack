"use client";

import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser } from "../../services/userServices";
import { saveToken } from "../../utils/token";
import {
  LoginInitialValues,
  LoginValidation,
} from "../../interface/LoginInterface";

const LoginComponent = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h1>

      <Formik
        initialValues={LoginInitialValues}
        validationSchema={LoginValidation}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            const res = await loginUser(values);

            const token = res.accessToken || res.access_token || res.token;

            if (!token) {
              throw new Error("No token received");
            }

            saveToken(token);

            router.push("/tasks");
          } catch (error) {
            setStatus("Credenciales inválidas");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Correo"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                placeholder="Contraseña"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {status && <p className="text-red-500 text-sm">{status}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginComponent;
