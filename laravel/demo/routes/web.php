<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

//view routers
Route::get('/', function () {
    return view('pages/index');
});
Route::get('/addproduct', function () {
    return view('pages/add-product');
});


//controllers routers
Route::resource('/products', ProductsController::class);

