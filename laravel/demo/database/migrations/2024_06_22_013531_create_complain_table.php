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
        Schema::create('complain', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('message', 500);
            $table->string('name', 50);
            $table->string('email', 20);
            $table->string('subject', 50);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complain');
    }
};
