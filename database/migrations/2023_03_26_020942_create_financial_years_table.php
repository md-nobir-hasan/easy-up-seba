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
        Schema::create('financial_years', function (Blueprint $table) {
            $table->id();
            $table->integer('from');
            $table->integer('to');
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->timestamps();
        });
        Schema::table('financial_years', function (Blueprint $table) {
            $table->foreign('created_by', 'financial_years_created_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('updated_by', 'financial_years_updated_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('deleted_by', 'financial_years_deleted_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('financial_years');
    }
};
