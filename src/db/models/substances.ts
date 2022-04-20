import {DataTypes, Model, Sequelize} from "sequelize";
import {Models} from "../index";

export class SubstanceModel extends Model {
    id: number
    name: string
    timeUnit: DataTypes.EnumDataType<any>
    halfLife:  DataTypes.DoubleDataType


}
export default (sequelize: Sequelize, modelName: string) => {

    SubstanceModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            timeUnit: {
                type: DataTypes.ENUM,
                allowNull: false,
            },
            halfTime: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },

        },
        {
            paranoid: false,
            timestamps: false,
            sequelize,
            modelName,
            tableName: 'substances',
        }
    );

    (SubstanceModel as any).associate = (models: Models) =>
    {
        SubstanceModel.hasMany(models.Diagnose, { foreignKey: 'substanceID' })
    }

    return SubstanceModel
}
