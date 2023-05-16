<?php

namespace Database\Factories;

use App\Enums\BusinessSpaceOwnershipType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TradeLicense>
 */
class TradeLicenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    { 
        $businessSpaceOwnership = BusinessSpaceOwnershipType::values();

        return [
            'name' => $this->faker->name(),
            'fathers_name' => $this->faker->name(),
            'mothers_name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'nationality' => $this->faker->country(),
            'nid_number' => $this->faker->numberBetween(999991231, 9231239812938),
            'fee' => $this->faker->randomFloat(2, 100, 9999),
            'e_fee' => $this->faker->randomFloat(2, 100, 9999),
            'business_name' => $this->faker->name(),
            'type_of_business' => $this->faker->name(),
            'liquid_capital' => $this->faker->randomFloat(2, 100, 9999),
            'business_starting_date' => $this->faker->dateTime(),
            'business_space_ownership' =>  $this->faker->randomElement($businessSpaceOwnership),
            'business_space_rant' => $this->faker->randomFloat(2, 100, 9999),
        ];
    }
}
