<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

//both middleware
Route::resource('/', PostController::class);

//guest
Route::middleware(['guest'])->group(function(){
    Route::view('/register', 'clients.register')->name('register');
    Route::view('/login', 'clients.login')->name('login');
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

//auth
Route::middleware(['auth'])->group(function(){
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::view('/admin', 'admin.index')->name('dashboard');
});
