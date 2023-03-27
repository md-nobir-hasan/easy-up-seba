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
        Schema::create('house_tax_deposites', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ekhana_id');
            $table->unsignedBigInteger('f_year_id');
            $table->decimal('total_amount');
            $table->decimal('f_kisti')->nullable();
            $table->decimal('s_kisti')->nullable();
            $table->decimal('t_kisti')->nullable();
            $table->decimal('fo_kisti')->nullable();
            $table->timestamp('deposite_date')->nullable();
            $table->decimal('paid_amount')->nullable();
            $table->decimal('arrears')->nullable();
            $table->decimal('fine')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->timestamps();
        });
        Schema::table('house_tax_deposites', function (Blueprint $table) {
            $table->foreign('ekhana_id', 'house_tax_deposites_ekhana_id')->references('id')->on('ekhanas')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('f_year_id', 'house_tax_deposites_f_year_id')->references('id')->on('financial_years')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('created_by', 'house_tax_deposites_created_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('updated_by', 'house_tax_deposites_updated_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('deleted_by', 'house_tax_deposites_deleted_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('house_tax_deposites');
    }
};