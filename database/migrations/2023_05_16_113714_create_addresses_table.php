<?php

use App\Models\District;
use App\Models\Division;
use App\Models\TradeLicense;
use App\Models\Union;
use App\Models\Upazila;
use App\Models\Village;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->foreignIdFor(Village::class)->constrained(); 
            $table->foreignIdFor(Union::class)->constrained();
            $table->string('postal_code', 50)->nullable();
            $table->string('ward_number')->nullable();
            $table->foreignIdFor(Upazila::class)->constrained();
            $table->foreignIdFor(District::class)->constrained();
            $table->foreignIdFor(Division::class)->constrained();
            $table->string('country', 100)->default('Bangladesh');
            $table->foreignIdFor(TradeLicense::class)->constrained();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
