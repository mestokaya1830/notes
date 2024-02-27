<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::get('/', function () {
    return view('welcome');
})->name('home');
Route::get('/products', [ProductsController::class,'index'])->name('productsIndex');
