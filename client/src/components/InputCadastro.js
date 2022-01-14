import React, { Fragment } from "react";

const InputCadastro = () => {
    return(
        <Fragment>
            <h1 className="text-center mt-5">Lista de Cadastro</h1>
            <form>
                <input type="text" />
                <button>Add</button>
            </form>
        </Fragment>
    );
};

export default InputCadastro;