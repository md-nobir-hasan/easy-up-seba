<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $n = [
            ['name' => 'Dashboard'],
            ['name' => 'Division'],
            ['name' => 'District'],
            ['name' => 'Upazila'],
            ['name' => 'Role'],
            ['name' => 'User'],
            ['name' => 'Menu Setup'],
            ['name' => 'Menu User'],
        ];

        DB::table('modules')->insert($n);
    }
}
