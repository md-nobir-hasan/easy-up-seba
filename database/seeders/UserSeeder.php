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
        'email' => "superadmin@gmail.com",
        'phone' => "01518460933",
        'show_pass' => "1988406007",
        'role_id' => 1,
        'word_id' => 1,
        'password' => Hash::make(1988406007),
        ];

    DB::table('users')->insert($n);
    }
}
