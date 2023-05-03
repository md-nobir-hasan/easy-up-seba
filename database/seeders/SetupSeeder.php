<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SetupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //================  Division ==============================
        $n =[
            ['name'=>'ঢাকা'],
            ['name'=>'খুলনা']
        ];
        DB::table('divisions')->insert($n);

        //================  District ==============================
        $n =[
            ['name'=>'ঢাকা','code'=>21,'division_id'=>1],
            ['name'=>'খুলনা','code'=>22,'division_id'=>2],
            ['name'=>'চুয়াডাঙ্গা','code'=>23,'division_id'=>2],
        ];
        DB::table('districts')->insert($n);


        //================  upazila ==============================
        $n =[
            ['name'=>'মিরপুর','code'=>32,'division_id'=>1,'district_id'=>1],
            ['name'=>'দর্শনা','code'=>35,'division_id'=>2,'district_id'=>3],
        ];
        DB::table('upazilas')->insert($n);


        //================  union ==============================
        $n =[
            ['name'=>'মিরপুর-১০','code'=>41,'division_id'=>1,'district_id'=>1,'upazila_id'=>1],
            ['name'=>'বেগমপুর','code'=>42,'division_id'=>2,'district_id'=>3,'upazila_id'=>2],
            ['name'=>'উথলি','code'=>43,'division_id'=>2,'district_id'=>3,'upazila_id'=>2],
        ];
        DB::table('unions')->insert($n);


        //================  word ==============================
        $n =[
            ['name'=>'1','code'=>51,'division_id'=>1,'district_id'=>1,'upazila_id'=>1,'union_id'=>1],
            ['name'=>'2','code'=>52,'division_id'=>1,'district_id'=>1,'upazila_id'=>1,'union_id'=>1],
            ['name'=>'4','code'=>53,'division_id'=>2,'district_id'=>3,'upazila_id'=>2,'union_id'=>2],
            ['name'=>'5','code'=>54,'division_id'=>2,'district_id'=>3,'upazila_id'=>2,'union_id'=>2],
            ['name'=>'1','code'=>55,'division_id'=>2,'district_id'=>3,'upazila_id'=>2,'union_id'=>3],
            ['name'=>'2','code'=>56,'division_id'=>2,'district_id'=>3,'upazila_id'=>2,'union_id'=>3],
        ];
        DB::table('words')->insert($n);


        //================  village ==============================
        $n =[
            ['name'=>'পর্বত','code'=>31,'division_id'=>1,'district_id'=>1,'upazila_id'=>1,'union_id'=>1,'word_id'=>'1'],
            ['name'=>'উজলপুর','code'=>32,'division_id'=>1,'district_id'=>1,'upazila_id'=>1,'union_id'=>1,'word_id'=>'4'],
        ];
        DB::table('villages')->insert($n);


        //================  Tax ==============================
        $n =[
            ['name'=>'বাসাবাড়ির কর','price'=>2.5],
        ];
        DB::table('taxes')->insert($n);

        //================  Educational Qualification ==============================
        $n =[
            ['name'=>'এস এস সি','des'=>'সেকান্ডারি স্কুল সারটিফিকেট'],
            ['name'=>'এইস এস সি','des'=>'হায়ার স্কুল সারটিফিকেট'],
        ];
        DB::table('education_qualifications')->insert($n);

        //================  Profession ==============================
        $n =[
            ['name'=>'ছাত্র'],
            ['name'=>'কৃষক']
        ];
        DB::table('professions')->insert($n);

        //================  Religion ==============================
        $n =[
            ['name'=>'ইসলাম'],
            ['name'=>'হিন্দু'],
            ['name'=>'খৃষ্টান'],
            ['name'=>'বৌদ্ধ'],
        ];
        DB::table('religions')->insert($n);


        //================  financial_year ==============================
        $n =[
            ['from'=>2023,'to'=>2024],
        ];
        DB::table('financial_years')->insert($n);
    }
}
