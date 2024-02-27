<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UsersController::class,'index'])->name('indexUser');
Route::post('/adduser', [UsersController::class,'create'])->name('addUser');
