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
        Schema::create('ekhanas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('union_id')->nullable();
            $table->unsignedBigInteger('word_id')->nullable();
            $table->unsignedBigInteger('village_id')->nullable();
            $table->unsignedBigInteger('holding_no')->nullable();
            $table->string('yearly_income')->nullable();
            $table->string('name')->nullable();
            $table->string('bn_name')->nullable();
            $table->unsignedBigInteger('ed_quali_id')->nullable();
            $table->string('phone')->nullable();
            $table->string('spouse_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('m_male')->nullable();
            $table->string('m_female')->nullable();
            $table->string('m_child')->nullable();
            $table->integer('paka_house')->nullable();
            $table->integer('adhapaka_house')->nullable();
            $table->integer('kasa_house')->nullable();
            $table->string('yearly_house_rent')->nullable();
            $table->decimal('tax_paid')->default(0)->nullable();
            $table->timestamp('dob')->nullable();
            $table->string('birth_no')->unique()->nullable();
            $table->string('nid')->unique()->nullable();
            $table->string('gender')->nullable();
            $table->unsignedBigInteger('religion_id')->nullable();
            $table->unsignedBigInteger('profession_id')->nullable();
            $table->enum('tuboil',[0,1])->nullable();
            $table->string('toilet_type')->nullable();
            $table->string('sc_past')->nullable();
            $table->string('sc_present')->nullable();
            $table->string('sc_future')->nullable();
            $table->string('rent_type')->nullable();
            $table->string('land_house')->nullable();
            $table->string('land_cultivate')->nullable();
            $table->string('infrastructure')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->timestamps();
        });
        Schema::table('ekhanas', function (Blueprint $table) {
            $table->foreign('union_id', 'ekhanas_union_id')->references('id')->on('unions')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('word_id', 'ekhanas_word_id')->references('id')->on('words')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('village_id', 'ekhanas_village_id')->references('id')->on('villages')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('ed_quali_id', 'ekhanas_ed_quali_id')->references('id')->on('education_qualifications')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('religion_id', 'ekhanas_religion_id')->references('id')->on('religions')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('profession_id', 'ekhanas_profession_id')->references('id')->on('professions')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('created_by', 'ekhanas_created_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('updated_by', 'ekhanas_updated_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('deleted_by', 'ekhanas_deleted_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ekhanas');
    }
};
