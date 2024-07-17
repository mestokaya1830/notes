<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

//views
Route::view('/', 'index')->name('home');
Route::view('/posts', 'posts.index')->name('posts');
Route::view('/register', 'auth.register')->name('register');
Route::view('/login', 'auth.login')->name('login');


//posts controller
Route::post('/register',[AuthController::class, 'register'])->name('register');