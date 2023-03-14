<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $n = [
            ['name' => 'Power'],
            ['name' => 'Editor'],
            ['name' => 'Viewer'],
        ];

        DB::table('roles')->insert($n);
    }
}
