module.exports = (sequelize,dataTypes) => {
    const alias = "OrdenCompras";
    const cols =  {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        fecha: {
            type: dataTypes.DATE
        }
        
    };

    const config = {
        tableName: "orden_compra",
        timestamps: false,
    };
    const OrdenCompra = sequelize.define(alias,cols,config);

    OrdenCompra.associate = (modelos) => {
        OrdenCompra.belongsTo(modelos.Usuarios,{
            as: "usuarios",
            foreignKey: "id_usuario"
        });

        OrdenCompra.belongsToMany(modelos.Productos,{
            as: "productos",
            through: "orden_compra_producto",
            foreignKey: "orden_id",
            otherKey: "id_producto",
            timestamps: false
        });
    }

   

    return OrdenCompra;
}