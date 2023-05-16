<?php

namespace Database\Seeders;

use App\Models\TradeLicense;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class TradeLicenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        TradeLicense::truncate();
        Schema::enableForeignKeyConstraints();

        TradeLicense::factory()->count(10)->create();
    }
}