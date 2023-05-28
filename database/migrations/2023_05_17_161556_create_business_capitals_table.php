<?php

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
        Schema::create('business_capitals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('tax')->nullable();
            $table->foreignIdFor(BusinessType::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_capitals');
    }
};
