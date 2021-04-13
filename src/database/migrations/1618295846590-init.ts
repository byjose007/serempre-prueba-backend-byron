import {MigrationInterface, QueryRunner} from "typeorm";

export class init1618295846590 implements MigrationInterface {
    name = 'init1618295846590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "companyName" character varying NOT NULL, "contactName" character varying NOT NULL, "contactTitle" character varying NOT NULL, "country" character varying NOT NULL, "phone" character varying NOT NULL, "postalCode" integer NOT NULL, "region" character varying NOT NULL, "street" character varying NOT NULL, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "discontinued" boolean NOT NULL, "productName" character varying NOT NULL, "quantityPerUnit" character varying NOT NULL, "reorderLevel" integer NOT NULL, "unitPrice" integer NOT NULL, "unitsInStock" integer NOT NULL, "unitsOnOrder" integer NOT NULL, "supplierId" integer, "categoryId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "name" character varying NOT NULL, "picture" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "phone" character varying NOT NULL, "postalCode" integer NOT NULL, "region" character varying NOT NULL, "street" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_4346e4adb741e80f3711ee09ba4" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_4346e4adb741e80f3711ee09ba4"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
    }

}
