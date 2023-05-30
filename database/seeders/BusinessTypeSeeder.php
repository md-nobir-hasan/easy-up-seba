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
        Schema::disableForeignKeyConstraints();
        BusinessType::truncate();
        Schema::enableForeignKeyConstraints();
        BusinessType::factory()->has(BusinessCapital::factory()->count(3))->count(10)->create();
    }
}
