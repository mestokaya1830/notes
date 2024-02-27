<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UsersController::class,'index'])->name('indexUser');
Route::post('/adduser', [UsersController::class,'create'])->name('addUser');

Route::get('/about', function(){
    return view('about');
})->name('about');

Route::get('/contact', function(){
    return view('contact');
})->name('contact');

Route::get('/notpermission', function(){
    return view('notpermission');
})->name('notpermission');

Route::group(['middleware' => ['test']], function(){
    Route::get('/admin', function(){
        return view('admin');
    })->name('admin');
});
