<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/products', [ProductsController::class, 'Index'])->name('productsIndex');

Route::get('/products/create', [ProductsController::class, 'Create'])->name('productCreate');
Route::post('/products/store', [ProductsController::class, 'Store'])->name('productStore');

Route::get('/products/edit/{id}', [ProductsController::class, 'Edit'])->name('productEdit');
Route::put('/products/update/{id}', [ProductsController::class, 'Update'])->name('productUpdate');

Route::get('/products/delete/{id}', [ProductsController::class, 'Delete'])->name('productDelete');
