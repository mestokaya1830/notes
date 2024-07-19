<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashBoardController;
use App\Http\Controllers\PostController;


Route::middleware('guest')->group(function() {
  //views
  Route::view('/register', 'auth.register')->name('register');
  Route::view('/login', 'auth.login')->name('login');
  
  //controllers
  Route::post('/register',[AuthController::class, 'register'])->name('register');
  Route::post('/login',[AuthController::class, 'login'])->name('login');
});

Route::middleware('auth')->group(function() {
  Route::get('/dashboard', [DashBoardController::class, 'index'])->middleware('auth')->name('dashboard');
  Route::post('/logout',[AuthController::class, 'logout'])->name('logout');
});


Route::resource('/posts', PostController::class);