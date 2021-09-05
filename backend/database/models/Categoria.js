module.exports = (sequelize,dataTypes) => {
    const alias = "Categorias";
    const cols =  {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: "categoria",
        timestamps: false,
    };
    const Categoria = sequelize.define(alias,cols,config);
    
    Categoria.associate = (modelos) => {
        Categoria.hasMany(modelos.Productos,{
            as: "productos",
            foreignKey: "categoria_id"
        })
    }
    
    return Categoria;
}