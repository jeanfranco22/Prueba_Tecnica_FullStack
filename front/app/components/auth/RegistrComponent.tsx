"use client";

import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerUser } from "../../services/userServices";
import {
  RegisterInitialValues,
  RegisterValidation,
  RegisterPayload,
} from "../../interface/RegisterInterface";

const RegisterComponent = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-center">Crear cuenta</h1>

      <Formik
        initialValues={RegisterInitialValues}
        validationSchema={RegisterValidation}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            const payload: RegisterPayload = {
              name: values.name,
              email: values.email,
              password: values.password,
            };

            await registerUser(payload);
            router.push("/login");
          } catch (error) {
            setStatus("No se pudo crear la cuenta");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Nombre"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

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

            <div>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="confirmPassword"
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
              {isSubmitting ? "Creando..." : "Registrarme"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterComponent;
