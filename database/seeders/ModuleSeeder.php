<?php

namespace Database\Seeders;

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
            ['name' => 'Union'],
            ['name' => 'Word'],//10
            ['name' => 'Village'],
        ];

        DB::table('modules')->insert($n);
    }
}
