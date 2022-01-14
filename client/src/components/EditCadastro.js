import React, { Fragment, useState } from "react";

const EditCadastro = ({ cadastro }) => {

    const [email, setEmail] = useState(cadastro.email);
    
    return (
        <Fragment>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#id_cadastro${cadastro.id}`}
            >
                Editar
            </button>

            {/*
                id = id10
            */}

            <div class="modal fade" id={`id_cadastro${cadastro.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditCadastro;