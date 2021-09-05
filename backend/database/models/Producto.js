module.exports = (sequelize,dataTypes) => {
    const alias = "Productos";
    const cols =  {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: dataTypes.DOUBLE
        },
        estatus: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: "producto",
        timestamps: false,
    };
    const Producto = sequelize.define(alias,cols,config);

    Producto.associate = (modelos) => {
        Producto.belongsTo(modelos.Categorias,{
            as: "categorias",
            foreignKey: "categoria_id"
        });

        Producto.belongsToMany(modelos.OrdenCompras,{
            as: "ordenesCompras",
            through: "orden_compra_producto",
            foreignKey: "id_prducto",
            otherKey: "orden_id",
            timestamps: false
        });
    }

    return Producto;
}