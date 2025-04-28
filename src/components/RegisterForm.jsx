import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Requerido"),
      email: Yup.string().email("Email inválido").required("Requerido"),
      password: Yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
    }),
    onSubmit: (values) => {
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      localStorage.setItem("registeredUser", JSON.stringify(userData));
      navigate("/login");
    },
  });

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      className="max-w-sm mx-auto bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-white font-medium mb-2">
          Nombre
        </label>
        <motion.input
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          className={`w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:border-blue-500 ${
            formik.errors.name ? "border-red-500" : "border-gray-300"
          }`}
          whileFocus={{ borderColor: "#3b82f6" }}
        />
        {formik.errors.name && <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Email
        </label>
        <motion.input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className={`w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:border-blue-500 ${
            formik.errors.email ? "border-red-500" : "border-gray-300"
          }`}
          whileFocus={{ borderColor: "#3b82f6" }}
        />
        {formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-white font-medium mb-2">
          Contraseña
        </label>
        <motion.input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className={`w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:border-blue-500 ${
            formik.errors.password ? "border-red-500" : "border-gray-300"
          }`}
          whileFocus={{ borderColor: "#3b82f6" }}
        />
        {formik.errors.password && <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>}
      </div>
      <motion.button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        whileHover={{ scale: 1.05 }}
      >
        Registrarse
      </motion.button>
    </motion.form>
  );
};

export default RegisterForm;
