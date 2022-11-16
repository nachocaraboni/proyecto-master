import { useState } from "react";

export const Contacto = () => {
  const initialState = { nombre: "", email: "", texto: "" };

  const [form, setForm] = useState(initialState);

  const inputChangeHandle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="container-fluid mx-auto mt-5 pt-5 text-white">
      <h2 >Dejanos tu consulta</h2>

      <form name="formulario" className="my-5 w-75 m-auto">
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label text-start">Nombre</label>
          <div className="col-sm-10">
            <input
              name="nombre"
              value={form.nombre}
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              onChange={inputChangeHandle}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label text-start">Email</label>
          <div className="col-sm-10">
            <input
              name="email"
              value={form.email}
              type="email"
              className="form-control"
              placeholder="Ingrese su email"
              onChange={inputChangeHandle}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label text-start">Mensaje</label>
          <div className="col-sm-10">
            <textarea
              name="texto"
              value={form.texto}
              className="form-control"
              placeholder="Ingrese su mensaje"
              rows={5}
              onChange={inputChangeHandle}
            />
          </div>
        </div>
        <button className="btn btn-success my-3" onClick={handleClick}>
          Enviar
        </button>
      </form>
    </div>
  );
};
