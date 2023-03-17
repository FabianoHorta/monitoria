const Categorias = require("../models/Categorias");

const deleteCategorias = async (req, res) => {
const findCategorias = await Categorias.findByPk(req.params.id);

    if(findCategorias){
        await Categorias.destroy({
            where: {
                categoriaId: req.params.id,
            }
        });
        return res.json({ mensagem: "A categoria foi deletada!"})
     }
    return res.json({ mensagem: "Nenhuma categoria deletada!"});
};

module.exports = { 
   deleteCategorias
};
