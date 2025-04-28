import React from "react";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Bienvenido {user?.name || "Usuario"}</h1>
    </div>
  );
};

export default Home;
