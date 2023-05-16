<?php

namespace Database\Factories;

use App\Enums\AddressType;
use App\Models\District;
use App\Models\Division;
use App\Models\TradeLicense;
use App\Models\Union;
use App\Models\Upazila;
use App\Models\Village;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $addressType = AddressType::values();

        return [
            'title' =>  $this->faker->randomElement($addressType),
            'village_id' => Village::all(['id'])->random(),
            'union_id' => Union::all(['id'])->random(),
            'postal_code' => $this->faker->postcode(),
            'ward_number' => $this->faker->name(),
            'upazila_id' => Upazila::all(['id'])->random(),
            'district_id' => District::all(['id'])->random(),
            'division_id' => Division::all(['id'])->random(),
            'trade_license_id' => TradeLicense::all(['id'])->random(),
        ];
    }
}
