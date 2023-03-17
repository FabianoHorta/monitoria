const Produtos = require("../models/Produtos");

const deleteProduto = async (req, res) => {
const findProduto = await Produtos.findByPk(req.params.id);

    if(findProduto){
        await Produtos.destroy({
            where: {
                id: req.params.id,
            }
        });
        return res.json({ mensagem: "O produto foi deletado!"})
     }
    return res.json({ mensagem: "Nenhum produto com esse identificador para deletar!"});
};

module.exports = { 
   deleteProduto
};
