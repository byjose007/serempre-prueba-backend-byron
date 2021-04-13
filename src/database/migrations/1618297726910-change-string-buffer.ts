import {MigrationInterface, QueryRunner} from "typeorm";

export class changeStringBuffer1618297726910 implements MigrationInterface {
    name = 'changeStringBuffer1618297726910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "picture"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "picture" bytea NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "picture"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "picture" character varying NOT NULL`);
    }

}
