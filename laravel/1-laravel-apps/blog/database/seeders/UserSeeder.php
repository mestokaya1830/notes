<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@outlook.com',
            'password' => Hash::make('9090'),
        ]);
        DB::table('users')->insert([
            'name' => 'test2',
            'email' => 'test2@outlook.com',
            'password' => Hash::make('9090'),
        ]);
        DB::table('users')->insert([
            'name' => 'test3',
            'email' => 'test3@outlook.com',
            'password' => Hash::make('9090'),
        ]);
    }
}