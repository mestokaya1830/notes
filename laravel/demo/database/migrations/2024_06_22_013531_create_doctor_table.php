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
        Schema::create('doctor', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('dob', 20);
            $table->string('gender', 10);
            $table->string('address');
            $table->string('phone', 20);
            $table->text('image');
            $table->string('department', 50);
            $table->string('biography');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor');
    }
};
