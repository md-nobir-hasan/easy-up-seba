<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('upazilas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('division_id')->nullable();
            $table->unsignedBigInteger('district_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->timestamps();
        });
        Schema::table('upazilas', function (Blueprint $table) {
            $table->foreign('division_id', 'upazilas_division_id')->references('id')->on('divisions')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('district_id', 'upazilas_district_id')->references('id')->on('districts')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('created_by', 'upazilas_created_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('updated_by', 'upazilas_updated_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('deleted_by', 'upazilas_deleted_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('upazilas');
    }
};
