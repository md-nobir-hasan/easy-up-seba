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
            ['name' => 'Dashboard','a_union' => '1'],
            ['name' => 'Setup','a_union' => '1'],
                ['name' => 'Division','a_union' => '1'],
                ['name' => 'District','a_union' => '1'],
                ['name' => 'Upazila','a_union' => '1'],
                ['name' => 'Union','a_union' => '1'],
                ['name' => 'Word','a_union' => '1'],
                ['name' => 'Village','a_union' => '1'],
                ['name' => 'Education Qualification','a_union' => '1'],
                ['name' => 'Profession','a_union' => '1'],//10
                ['name' => 'Setup Tax','a_union' => '1'],
                ['name' => 'Religion','a_union' => '1'],
                ['name' => 'Financial Year','a_union' => '1'],
                ['name' => 'House Structure','a_union' => '1'],
            ['name' => 'User Management','a_union' => '1'],
                ['name' => 'Role','a_union' => '1'],
                ['name' => 'User','a_union' => '1'],
            ['name' => 'Tax','a_union' => '1'],
                ['name' => 'E-Khana','a_union' => '1'],
                ['name' => 'Calculation','a_union' => '1'],//20
                    ['name' => 'House Tax Deposite','a_union' => '1'],
                    ['name' => 'House Tax Deposite List','a_union' => '1'],
                    ['name' => 'Village Based Levy','a_union' => '1'],
                ['name' => 'টপলিষ্ট/ডেইলি পোষ্টিং','a_union' => '1'],
                    ['name' => 'দার্য/আদায় টপশীট','a_union' => '1'],
                    ['name' => 'ডেইলি পোষ্টিং','a_union' => '1'],
                    ['name' => 'ডেইলি পোষ্টিং টপশিট','a_union' => '1'],
            ['name' => 'Approval','a_union' => null],
                ['name' => 'Tax Deposite Approval','a_union' => null],
        ];

        DB::table('modules')->insert($n);
    }
}
