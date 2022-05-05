import {DataTypes, Model, Sequelize} from "sequelize";
import {Models} from "../index";
import {TIME_UNITS} from "../../utils/enums";

export class SubstanceModel extends Model {
    id: number
    name: string
    timeUnit: TIME_UNITS
    halfLife:  number


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
                type: DataTypes.ENUM(TIME_UNITS.SECOND,TIME_UNITS.MINUTE,TIME_UNITS.HOUR,TIME_UNITS.DAY),
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
