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
            $table->decimal('f_kisti')->default(0)->nullable();
            $table->decimal('s_kisti')->default(0)->nullable();
            $table->decimal('t_kisti')->default(0)->nullable();
            $table->decimal('fo_kisti')->default(0)->nullable();
            $table->timestamp('deposite_date')->nullable();
            $table->timestamp('f_date')->nullable();
            $table->timestamp('s_date')->nullable();
            $table->timestamp('t_date')->nullable();
            $table->decimal('paid_amount')->default(0)->nullable();
            $table->decimal('arrears')->default(0)->nullable();
            $table->decimal('fine')->default(0)->nullable();
            $table->enum('approval',[1,2,3])->default(1);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->unsignedBigInteger('union_id');
            $table->unsignedBigInteger('word_id');
            $table->timestamps();
        });
        Schema::table('house_tax_deposites', function (Blueprint $table) {
            $table->foreign('ekhana_id', 'house_tax_deposites_ekhana_id')->references('id')->on('ekhanas')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('union_id', 'house_tax_deposites_union_id')->references('id')->on('unions')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('word_id', 'house_tax_deposites_word_id')->references('id')->on('words')->onDelete('cascade')->onUpdate('cascade');
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
