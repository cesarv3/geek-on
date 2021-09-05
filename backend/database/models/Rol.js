module.exports = (sequelize,dataTypes) => {
    const alias = "Rol";
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
        tableName: "rol",
        timestamps: false,
    };
    const Rol = sequelize.define(alias,cols,config);

    Rol.associate = (modelos) => {
        Rol.hasMany(modelos.Usuarios,{
            as: "usuarios",
            foreignKey: "rol_id"
        })
    }

    return Rol;
}