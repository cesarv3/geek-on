module.exports = (sequelize,dataTypes) => {
    const alias = "Usuarios";
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
        aPaterno: {
            type: dataTypes.STRING
        },
        aMaterno: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        rol_id: {
            type: dataTypes.INTEGER
        },
        
    };

    const config = {
        tableName: "usuario",
        timestamps: false,
    };
    const Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = (modelos) => {
        Usuario.belongsTo(modelos.Rol,{
            as: "roles",
            foreignKey: "rol_id"
        });
        Usuario.hasMany(modelos.OrdenCompras,{
            as: "ordenescompra",
            foreignKey: "id_usuario"
        });
    }

    return Usuario;
}