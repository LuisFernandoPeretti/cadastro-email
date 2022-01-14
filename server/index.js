const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a cadastro

app.post("/cadastros", async (req, res) => {
    try {
        const { email } = req.body;
        const novoCadastro = await pool.query(
            "INSERT INTO cadastro (email) VALUES ($1) RETURNING *",
            [email]
        );

        res.json(novoCadastro.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all cadastro

app.get("/cadastros", async (req, res) => {
    try {
        const todosCadastros = await pool.query("SELECT * FROM cadastro");
        res.json(todosCadastros.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//get a cadastro

app.get("/cadastros/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cadastro = await pool.query("SELECT * FROM cadastro WHERE id = $1", [id])

        res.json(cadastro.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a cadastro

app.put("/cadastros/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const updateCadastro = await pool.query(
            "UPDATE cadastro SET nome = $1 WHERE id = $2",
            [nome, id]
        );
            res.json("Cadastro foi atualizado")
    } catch (err) {
        console.error(err.message);
    }
})

//delete a cadastro

app.delete("/cadastros/:id", async (req, res) => {
    try {
        const { id } = req. params;
        const deleteCadastro = await pool.query("DELETE FROM cadastro WHERE id = $1", [id]);
        res.json("Cadastro apagado");
    } catch (error) {
        console.log(err.message)
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});