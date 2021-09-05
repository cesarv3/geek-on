module.exports = (sequelize,dataTypes) => {
    const alias = "OrdenComprasProductos";
    const cols =  {
        id_orden_compra: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        orden_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_producto: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER
        }
        
    };

    const config = {
        tableName: "orden_compra_producto",
        timestamps: false,
    };
    const OrdenCompraProducto = sequelize.define(alias,cols,config);

    return OrdenCompraProducto;
}