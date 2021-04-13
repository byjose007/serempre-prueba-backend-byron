import {MigrationInterface, QueryRunner} from "typeorm";

export class ondeleCascadeSuppliers1618301788320 implements MigrationInterface {
    name = 'ondeleCascadeSuppliers1618301788320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "fax"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "homepage"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "cupplierid"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "cupplierid" integer`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "homepage" character varying(94)`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "fax" character varying(15)`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "city" character varying(13)`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD "address" character varying(45)`);
    }

}
