import {MigrationInterface, QueryRunner} from "typeorm";

export class stringPostalCode1618299832944 implements MigrationInterface {
    name = 'stringPostalCode1618299832944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "fax"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "homepage"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productid"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "categoryid"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "categoryname"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "postalCode"`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "postalCode" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "postalCode"`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "postalCode" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD "categoryname" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "category" ADD "categoryid" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "productid" integer`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "homepage" character varying(94)`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "fax" character varying(15)`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "city" character varying(13)`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "address" character varying(45)`);
    }

}
