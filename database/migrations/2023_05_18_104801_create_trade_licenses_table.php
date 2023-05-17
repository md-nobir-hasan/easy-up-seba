<?php

use App\Models\BusinessCapital;
use App\Models\BusinessType;
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
            $table->string('email', 100)->unique();
            $table->string('phone', 50);
            $table->string('nationality', 50);
            $table->string('nid_number', 50);
            $table->decimal('fee', 8, 2)->nullable();
            $table->decimal('e_fee', 8, 2)->nullable();
            $table->string('business_name', 100);
            $table->foreignIdFor(BusinessType::class)->constrained();
            $table->foreignIdFor(BusinessCapital::class)->constrained();
            $table->dateTime('business_starting_date')->nullable();
            $table->string('ownership')->nullable();
            $table->decimal('business_space_rant', 8, 2)->nullable();
            $table->string('size_of_signboard')->nullable();
            $table->string('code_number');
            $table->string('status')->default('Pending');
            $table->softDeletes();
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