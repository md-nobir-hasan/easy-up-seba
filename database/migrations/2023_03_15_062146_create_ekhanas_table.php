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
            $table->unsignedBigInteger('word_id');
            $table->unsignedBigInteger('village_id');
            $table->integer('holding_no');
            $table->float('yearly_income');
            $table->string('name');
            $table->string('bn_name');
            $table->unsignedBigInteger('ed_quali_id');
            $table->string('phone');
            $table->string('spouse_name');
            $table->string('mother_name');
            $table->integer('m_male');
            $table->integer('m_female');
            $table->integer('m_child');
            $table->timestamp('dob');
            $table->string('birth_no');
            $table->string('nid');
            $table->string('gender');
            $table->unsignedBigInteger('religion_id');
            $table->unsignedBigInteger('profession_id');
            $table->enum('tuboil',[0,1]);
            $table->string('toilet_type');
            $table->string('sc_past')->nullable();
            $table->string('sc_present')->nullable();
            $table->string('sc_future')->nullable();
            $table->float('yearly_house_rent');
            $table->string('rent_type');
            $table->float('land_house');
            $table->float('land_cultivate');
            $table->string('infrastructure');
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->timestamps();
        });
        Schema::table('ekhanas', function (Blueprint $table) {
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
