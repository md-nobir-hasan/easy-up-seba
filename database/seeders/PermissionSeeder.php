<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $n = [
            ['role_id' => 1,'module_id' => 1,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 2,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 3,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 4,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 5,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 6,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 7,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 8,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 9,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 10,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 11,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 12,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 13,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 14,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 15,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 16,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 17,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 18,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 19,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 20,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 1,'module_id' => 21,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
        ];

        DB::table('permissions')->insert($n);
    }
}
