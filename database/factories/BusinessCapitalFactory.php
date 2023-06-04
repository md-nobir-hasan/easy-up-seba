<?php

namespace Database\Factories;

use App\Models\BusinessType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BusinessCapital>
 */
class BusinessCapitalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'tax' => $this->faker->randomFloat(2, 50, 2000),
            'business_type_id' => BusinessType::all(['id'])->random(),
            'quantifiable' => $this->faker->numberBetween(0,1)
        ];
    }
}
