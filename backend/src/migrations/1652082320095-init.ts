import { MigrationInterface, QueryRunner } from "typeorm";

export class init1652082320095 implements MigrationInterface {
    name = 'init1652082320095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deleted" TIMESTAMP, "version" integer NOT NULL, "clientName" character varying NOT NULL, CONSTRAINT "UQ_96da49381769303a6515a8785c7" UNIQUE ("id"), CONSTRAINT "UQ_96da49381769303a6515a8785c7" UNIQUE ("id"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointment" ("id" uuid NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deleted" TIMESTAMP, "version" integer NOT NULL, "startingDate" TIMESTAMP NOT NULL, "endingDate" TIMESTAMP NOT NULL, "clientId" uuid, "staffMemberId" uuid, CONSTRAINT "UQ_e8be1a53027415e709ce8a2db74" UNIQUE ("id"), CONSTRAINT "UQ_e8be1a53027415e709ce8a2db74" UNIQUE ("id"), CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staff_member" ("id" uuid NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deleted" TIMESTAMP, "version" integer NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, CONSTRAINT "UQ_342343208cbc30b3c14a976b0a0" UNIQUE ("id"), CONSTRAINT "UQ_342343208cbc30b3c14a976b0a0" UNIQUE ("id"), CONSTRAINT "PK_342343208cbc30b3c14a976b0a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD CONSTRAINT "FK_60ac979e3cb15127f2221e3b66d" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD CONSTRAINT "FK_917be968a18bab4c5f12641a6f5" FOREIGN KEY ("staffMemberId") REFERENCES "staff_member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_917be968a18bab4c5f12641a6f5"`);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_60ac979e3cb15127f2221e3b66d"`);
        await queryRunner.query(`DROP TABLE "staff_member"`);
        await queryRunner.query(`DROP TABLE "appointment"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
