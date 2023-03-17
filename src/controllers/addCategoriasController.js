const Categorias = require("../models/Categorias");

const addCategorias = async (req, res) => {
  const { nome, descricao } = req.body;

  const categoriaExiste = await Categorias.findOne({
    where: {
      nome: nome,
    },
  });

  if (!categoriaExiste) {
    if (nome && descricao !== null) {
      const categoriaCreated = await Categorias.create({
        nome: nome,
        descricao: descricao,
      });
      return res.json({ mensagem: "Categoria inserida com sucesso." });
    } else {
      return res.json({ mensagem: "Os valores não podem ser nulos." });
    }
  }
  return res.json({ mensagem: "Nome já cadastrado." });
};

module.exports = {
  addCategorias,
};
