import {DataTypes, Model, Sequelize} from "sequelize";
import {Models} from "../index";

export class PatientModel extends Model {
    id: number
    firstName: string
    lastName: string
    birthdate : string
    weight:number
    height:number
    identificationNumber:string
    gender:DataTypes.EnumDataType<any>

    // foreign keys
    diagnoseID: number

}

export default (sequelize: Sequelize, modelName: string) => {
    PatientModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
            },
            firstName: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            birthdate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            weight: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            height: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            identificationNumber: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.ENUM,
                allowNull: false,
            },
            // foreign keys
            diagnoseID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

        },
        {
            paranoid: false,
            timestamps: false,
            sequelize,
            modelName,
            tableName: 'patients',
        }
    );

    (PatientModel as any).associate = (models: Models) => {
        PatientModel.belongsTo(models.Diagnose, { foreignKey: 'diagnoseID' })
    }
    return PatientModel
}
