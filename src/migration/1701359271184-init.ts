import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1701359271184 implements MigrationInterface {
    name = 'Init1701359271184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "genres" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "page_count" integer NOT NULL, "year" integer NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rentals" ("id" SERIAL NOT NULL, "rental_date" TIMESTAMP NOT NULL DEFAULT now(), "return_date" TIMESTAMP NOT NULL, "user_id" integer, "book_id" integer, CONSTRAINT "REL_013b75f259b85b40d1028718b5" UNIQUE ("book_id"), CONSTRAINT "PK_2b10d04c95a8bfe85b506ba52ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book_authors" ("book_id" integer NOT NULL, "author_id" integer NOT NULL, CONSTRAINT "PK_75172094a131109db714f4f2bc7" PRIMARY KEY ("book_id", "author_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1d68802baf370cd6818cad7a50" ON "book_authors" ("book_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6fb8ac32a0a0bbca076b2cf7c5" ON "book_authors" ("author_id") `);
        await queryRunner.query(`CREATE TABLE "book_genres" ("book_id" integer NOT NULL, "genre_id" integer NOT NULL, CONSTRAINT "PK_dc2d072b9d76acb4c5f2a4c55e6" PRIMARY KEY ("book_id", "genre_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dc378b8311ff85f0dd38f16309" ON "book_genres" ("book_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_43ff7d87d7506e768ca6491a1d" ON "book_genres" ("genre_id") `);
        await queryRunner.query(`ALTER TABLE "rentals" ADD CONSTRAINT "FK_b13ac8580bd6a011f47a476fbad" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rentals" ADD CONSTRAINT "FK_013b75f259b85b40d1028718b52" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "book_authors" ADD CONSTRAINT "FK_1d68802baf370cd6818cad7a503" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_authors" ADD CONSTRAINT "FK_6fb8ac32a0a0bbca076b2cf7c5a" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_genres" ADD CONSTRAINT "FK_dc378b8311ff85f0dd38f163090" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_genres" ADD CONSTRAINT "FK_43ff7d87d7506e768ca6491a1dd" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_genres" DROP CONSTRAINT "FK_43ff7d87d7506e768ca6491a1dd"`);
        await queryRunner.query(`ALTER TABLE "book_genres" DROP CONSTRAINT "FK_dc378b8311ff85f0dd38f163090"`);
        await queryRunner.query(`ALTER TABLE "book_authors" DROP CONSTRAINT "FK_6fb8ac32a0a0bbca076b2cf7c5a"`);
        await queryRunner.query(`ALTER TABLE "book_authors" DROP CONSTRAINT "FK_1d68802baf370cd6818cad7a503"`);
        await queryRunner.query(`ALTER TABLE "rentals" DROP CONSTRAINT "FK_013b75f259b85b40d1028718b52"`);
        await queryRunner.query(`ALTER TABLE "rentals" DROP CONSTRAINT "FK_b13ac8580bd6a011f47a476fbad"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_43ff7d87d7506e768ca6491a1d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc378b8311ff85f0dd38f16309"`);
        await queryRunner.query(`DROP TABLE "book_genres"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6fb8ac32a0a0bbca076b2cf7c5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1d68802baf370cd6818cad7a50"`);
        await queryRunner.query(`DROP TABLE "book_authors"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "rentals"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "authors"`);
        await queryRunner.query(`DROP TABLE "genres"`);
    }

}
