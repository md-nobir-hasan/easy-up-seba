<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //USer seeder
        $n =[
                [
                    'name' => "Super Admin",
                    'email' => "admin@easyupseba.com",
                    'phone' => "01988406007",
                    'show_pass' => "CceANO98B@B1",
                    'role_id' => 1,
                    'union_id' => 1,
                    'password' => Hash::make('CceANO98B@B1'),
                ],
                [
                    'name' => "Admin of Union",
                    'email' => "union@easyupseba.com",
                    'phone' => "1770001211",
                    'show_pass' => "union2023",
                    'role_id' => 2,
                    'union_id' => 1,
                    'password' => Hash::make('union2023'),
                ],
                [
                    'name' => "Md Raju",
                    'email' => "word1@easyupseba.com",
                    'phone' => "01518460933",
                    'show_pass' => "union2023",
                    'role_id' => 3,
                    'union_id' => 1,
                    'password' => Hash::make('word2023'),
                ],
            ];

        DB::table('users')->insert($n);


    }
}
