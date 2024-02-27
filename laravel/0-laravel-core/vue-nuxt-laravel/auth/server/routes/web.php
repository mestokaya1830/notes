<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::controller(UserController::class)->group(function(){
    Route::post('login','login');
    Route::post('register','register');
    Route::post('logout','logout');
});