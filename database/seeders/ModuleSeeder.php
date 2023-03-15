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
            ['name' => 'Education Qualification'],
            ['name' => 'Profession'],
            ['name' => 'Tax'],
            ['name' => 'Religion'],//15
            ['name' => 'House Structure'],
            ['name' => 'E-Khana'],
        ];

        DB::table('modules')->insert($n);
    }
}
