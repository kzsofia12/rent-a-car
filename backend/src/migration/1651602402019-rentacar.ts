import {MigrationInterface, QueryRunner} from "typeorm";

export class rentacar1651602402019 implements MigrationInterface {
    name = 'rentacar1651602402019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`client\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`idNumber\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicle\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('Autó', 'Vizijármű', 'Motor') NOT NULL DEFAULT 'Autó', \`brand\` varchar(255) NOT NULL, \`brand_type\` varchar(255) NOT NULL, \`status\` enum ('szabad', 'kikölcsönzött', 'selejtezett') NOT NULL DEFAULT 'szabad', \`km\` int NOT NULL, \`license_plate_number\` varchar(255) NOT NULL, \`procurement_date\` datetime NOT NULL, \`daily_price\` int NOT NULL, \`km_price\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rent\` (\`id\` int NOT NULL AUTO_INCREMENT, \`rented_at\` datetime NOT NULL, \`rented_end\` datetime NULL, \`is_damaged\` tinyint NULL, \`status\` enum ('folyamatban', 'befejezett') NOT NULL DEFAULT 'folyamatban', \`km\` int NULL, \`final_price\` int NULL, \`client_id\` int NOT NULL, \`vehicle_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rent\` ADD CONSTRAINT \`FK_a465880296eb57c105ac8588392\` FOREIGN KEY (\`client_id\`) REFERENCES \`client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rent\` ADD CONSTRAINT \`FK_e52d0b7a1141b114742eecb7291\` FOREIGN KEY (\`vehicle_id\`) REFERENCES \`vehicle\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rent\` DROP FOREIGN KEY \`FK_e52d0b7a1141b114742eecb7291\``);
        await queryRunner.query(`ALTER TABLE \`rent\` DROP FOREIGN KEY \`FK_a465880296eb57c105ac8588392\``);
        await queryRunner.query(`DROP TABLE \`rent\``);
        await queryRunner.query(`DROP TABLE \`vehicle\``);
        await queryRunner.query(`DROP TABLE \`client\``);
    }

}
