import React, { Fragment, useEffect, useState } from "react";

const ListCadastro = () => {

  const [cadastros, setCadastros] = useState([]);

  const getCadastros = async () => {
    try {
      
      const response = await fetch("http://localhost:5000/cadastros")
      const jsonData = await response.json()

      setCadastros(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  //console.log(cadastros);

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
            <th>Cadastrar</th>
          </tr>
        </thead>
        <tbody>
          {/*           <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
          {cadastros.map(cadastro => (
            <tr>
              <td>{cadastro.email}</td>
              <td>Editar</td>
              <td><button className="btn btn-danger">Deletar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListCadastro;