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
        //role_id 1 = Power
        //role_id 2 = Union
        //role_id 3 = Hasan //means word

        //This for Power
        $n = [
            ['role_id' => 1,'module_id' => 1,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Dashboard
            ['role_id' => 1,'module_id' => 2,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Setup
            ['role_id' => 1,'module_id' => 3,'add' => '1','show' => '1','edit' => '1','delete' => '1'], // Division
            ['role_id' => 1,'module_id' => 4,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //District
            ['role_id' => 1,'module_id' => 5,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Upazila
            ['role_id' => 1,'module_id' => 6,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Union
            ['role_id' => 1,'module_id' => 7,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Word
            ['role_id' => 1,'module_id' => 8,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Village
            ['role_id' => 1,'module_id' => 9,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Education Qualification
            ['role_id' => 1,'module_id' => 10,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Profession
            ['role_id' => 1,'module_id' => 11,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Setup Tax
            ['role_id' => 1,'module_id' => 12,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Religion
            ['role_id' => 1,'module_id' => 13,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Financial Year
            ['role_id' => 1,'module_id' => 14,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //HOuse Structure
            ['role_id' => 1,'module_id' => 15,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //User Management
            ['role_id' => 1,'module_id' => 16,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Role
            ['role_id' => 1,'module_id' => 17,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //User
            ['role_id' => 1,'module_id' => 18,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Tax
            ['role_id' => 1,'module_id' => 19,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //E-khana
            ['role_id' => 1,'module_id' => 20,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Calculation
            ['role_id' => 1,'module_id' => 21,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //House Tax Deposite
            ['role_id' => 1,'module_id' => 22,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //HouserTax Deposite List
            ['role_id' => 1,'module_id' => 23,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Approval
            ['role_id' => 1,'module_id' => 24,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //টপলিষ্ট/ডেইলি পোষ্টিং
            ['role_id' => 1,'module_id' => 25,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //ধর্য/আদায় টপশীট
            ['role_id' => 1,'module_id' => 26,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //ডেইলি পোষ্টিং
            ['role_id' => 1,'module_id' => 27,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //ডেইলি পোষ্টিং টপশিট
            ['role_id' => 1,'module_id' => 28,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Approval
            ['role_id' => 1,'module_id' => 29,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //Tax Deposite Approval
            ['role_id' => 1,'module_id' => 30,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //ওয়ার্ড ভিত্তিক ধার্য
            ['role_id' => 1,'module_id' => 31,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //
            ['role_id' => 1,'module_id' => 32,'add' => '1','show' => '1','edit' => '1','delete' => '1'], //
        ];

         //This for Unon
         $nunion = [
            ['role_id' => 2,'module_id' => 1,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 2,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 3,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 4,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 5,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 6,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 7,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 8,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 9,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 10,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 11,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 12,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 13,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 14,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 15,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 16,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 17,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 18,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 19,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 20,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 21,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 2,'module_id' => 22,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
        ];

         //This for hasan //word
         $nword = [
            ['role_id' => 3,'module_id' => 1,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 2,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 3,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 4,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 5,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 6,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 7,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 8,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 9,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 10,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 11,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 12,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 13,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 14,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 15,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 16,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 17,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 18,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 19,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 20,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 21,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
            ['role_id' => 3,'module_id' => 22,'add' => '1','show' => '1','edit' => '1','delete' => '1'],
        ];

        DB::table('permissions')->insert($n);
        DB::table('permissions')->insert($nunion);
        DB::table('permissions')->insert($nword);
    }
}
