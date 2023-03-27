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
            ['name' => 'Setup'],
                ['name' => 'Division'],
                ['name' => 'District'],
                ['name' => 'Upazila'],
                ['name' => 'Union'],
                ['name' => 'Word'],
                ['name' => 'Village'],
                ['name' => 'Education Qualification'],
                ['name' => 'Profession'],//10
                ['name' => 'Tax'],
                ['name' => 'Religion'],
                ['name' => 'Financial Year'],
                ['name' => 'House Structure'],
            ['name' => 'User Management'],
                ['name' => 'Role'],
                ['name' => 'User'],
            ['name' => 'Tax'],
                ['name' => 'E-Khana'],
                ['name' => 'Calculation'],//20
                    ['name' => 'House Tax Deposite'],
                    ['name' => 'House Tax Deposite List'],
        ];

        DB::table('modules')->insert($n);
    }
}
