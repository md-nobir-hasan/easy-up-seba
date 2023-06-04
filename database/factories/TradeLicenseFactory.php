<?php

namespace Database\Factories;

use App\Enums\OwnershipType;
use App\Models\BusinessCapital;
use App\Models\BusinessType;
use Illuminate\Database\Eloquent\Factories\Factory;
use Ramsey\Uuid\Uuid;

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
        $ownershipType = OwnershipType::values();

        return [
            'name' => $this->faker->name(),
            'fathers_name' => $this->faker->name(),
            'mothers_name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'code_number' => Uuid::uuid4()->toString(),
            'phone' => $this->faker->phoneNumber(),
            'nationality' => $this->faker->country(),
            'nid_number' => $this->faker->numberBetween(999991231, 9231239812938),
            'fee' => $this->faker->randomFloat(2, 100, 9999),
            'e_fee' => $this->faker->randomFloat(2, 100, 9999),
            'tin_number' => $this->faker->randomFloat(2, 100, 9999),
            'business_name' => $this->faker->name(),
            'business_type_id' => $this->faker->randomElement(BusinessType::pluck('id')->toArray()),
            'business_capital_id' => $this->faker->randomElement(BusinessCapital::pluck('id')->toArray()),
            'business_starting_date' => $this->faker->dateTime(),
            'ownership' =>  $this->faker->randomElement($ownershipType),
            'business_space_rant' => $this->faker->randomFloat(2, 100, 9999),
            'size_of_signboard' => $this->faker->randomFloat(2, 100, 9999),
        ];
    }
}
