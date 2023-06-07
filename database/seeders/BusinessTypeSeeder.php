<?php

namespace Database\Seeders;

use App\Models\BusinessCapital;
use App\Models\BusinessType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class BusinessTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Schema::disableForeignKeyConstraints();
        // BusinessType::truncate();
        // Schema::enableForeignKeyConstraints();
        // BusinessType::factory()->has(BusinessCapital::factory()->count(3))->count(10)->create();
        $n=[
          ['name' => 'গুদাম (লিমিটেড কোম্পানী ব্যতীত)'],
          ['name' => 'দিমাগার (লিমিটেড কোম্পানী ব্যতীত)'],
          ['name' => 'ক্ষুদ্র ও কুটির শিল্প (লিমিটেড কোম্পানী ব্যতীত)'],
          ['name' => 'শিল্প কারখানা (লিমিটেড কোম্পানী ব্যতীত)'],
          ['name' => 'কৃষি খামার, দুগ্ধ খামার, হাঁস-মুরগির খামার, মৎস্য খামার, গবাদি পশুর খামার ইত্যাদি (লিমিটেড কোম্পানী ব্যতীত)'],
          ['name' => 'ধান ভাঙ্গানো কল, আটা বা ময়দার কল বা মিল, তেলের কল (লিমিটেড কোম্পানী ব্যতীত)'],
          ['name' => "স'মিল, বিদ্যুৎ চালিত অন্যান্য মিল (লিমিটেড কোম্পানী ব্যতীত)"],
          ['name' => 'ইট ভাটা বাঁ অন্যান্য সিরামিক প্রস্তুতকারক'],
          ['name' => 'সিনেমা হল'],
          ['name' => 'বিউটি পারলার, হেয়ার ড্রেসিং সেলুন'],
          ['name' => 'লন্ড্রী'],
          ['name' => 'ব্যাংক, আর্থিক প্রতিষ্ঠান, বেসরকারি অফিস, প্রতিষ্ঠান বা সংস্থা বাঁ উহাদের কোন শাখা'],
          ['name' => 'ঠিকাদারী ফার্ম বাঁ প্রতিষ্ঠান'],
          ['name' => ''],
          ['name' => ''],
          ['name' => ''],
          ['name' => ''],
          ['name' => ''],
          ['name' => ''],
          ['name' => ''],
          ['name' => ''],
          ['name' => ''],
        ],
    }
}
