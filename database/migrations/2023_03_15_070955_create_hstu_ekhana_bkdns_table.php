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
        Schema::create('hstu_ekhana_bkdns', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('price');
            $table->unsignedBigInteger('hstru_id')->nullable();
            $table->unsignedBigInteger('ekhana_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->timestamps();
        });
        Schema::table('hstu_ekhana_bkdns', function (Blueprint $table) {
            $table->foreign('hstru_id', 'hstu_ekhana_bkdns_hstru_id')->references('id')->on('house_structures')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('ekhana_id', 'hstu_ekhana_bkdns_ekhana_id')->references('id')->on('ekhanas')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('created_by', 'hstu_ekhana_bkdns_created_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('updated_by', 'hstu_ekhana_bkdns_updated_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('deleted_by', 'hstu_ekhana_bkdns_deleted_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hstu_ekhana_bkdns');
    }
};
