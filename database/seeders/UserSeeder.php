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
        $n =['name' => "Super Admin",
        'email' => "support@reshub.info",
        'phone' => "01988406007",
        'show_pass' => "CceANO98B@B1",
        'role_id' => 1,
        'word_id' => 1,
        'password' => Hash::make('CceANO98B@B1'),
        ];

    DB::table('users')->insert($n);
    }
}
