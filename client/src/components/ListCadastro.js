import React, { Fragment, useEffect, useState } from "react";

import EditCadastro from "./EditCadastro";

const ListCadastro = () => {
  const [cadastros, setCadastros] = useState([]);

  //delete cadastro function

  const deleteCadastro = async id2 => {
    try {
      const deleteCadastro = await fetch(`http://localhost:5000/cadastro/${id2}`, {
        method: "DELETE"
      });

      setCadastros(cadastros.filter(cadastro => cadastro.id !== id2));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCadastros = async () => {
    try {
      const response = await fetch("http://localhost:5000/cadastros");
      const jsonData = await response.json();

      setCadastros(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCadastros();
  }, []);

  console.log(cadastros);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Email</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {cadastros.map(cadastro => (
            <tr key={cadastro.id}>
              <td>{cadastro.email}</td>
              <td>
                <EditCadastro cadastro={cadastro} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCadastro(cadastro.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListCadastro;