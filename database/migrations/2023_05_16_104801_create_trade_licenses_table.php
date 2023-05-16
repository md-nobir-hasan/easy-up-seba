<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trade_licenses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('fathers_name');
            $table->string('mothers_name');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('nationality');
            $table->string('nid_number');
            $table->decimal('fee', 8, 2)->nullable();
            $table->decimal('e_fee', 8, 2)->nullable();
            $table->string('business_name');
            $table->string('type_of_business');
            $table->decimal('liquid_capital', 8, 2)->nullable();
            $table->dateTime('business_starting_date');
            $table->string('business_space_ownership')->nullable();
            $table->decimal('business_space_rant', 8, 2)->nullable();
            $table->string('size_of_signboard')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trade_licenses');
    }
};
