import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("email") || "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Requerido"),
      password: Yup.string().required("Requerido"),
    }),
    onSubmit: (values) => {
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (registeredUser && values.email === registeredUser.email && values.password === registeredUser.password) {
        localStorage.setItem("user", JSON.stringify({ name: registeredUser.name, email: registeredUser.email }));
        window.location.reload();
      } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    },
  });

  return (
    <motion.div
      className="max-w-sm mx-auto bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={`w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:border-blue-500 ${
              formik.errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white font-medium mb-2">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={`w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:border-blue-500 ${
              formik.errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formik.errors.password && <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>}
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          Iniciar sesión
        </motion.button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-400">¿No tienes una cuenta?</p>
        <button className="text-blue-500 hover:underline" onClick={() => navigate("/register")}>
          Regístrate
        </button>
      </div>
    </motion.div>
  );
};

export default LoginForm;
