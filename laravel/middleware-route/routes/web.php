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

Route::get('/admin', function(){
    return view('admin');
})->middleware('checkRole')->name('admin');


//middleware-------------------------------------------------------------------------
// Route::middleware(['auth','isAdmin'])->group(function () {
//     Route::get('/admin', function () {
//         return '<h1>You ara an admin</h1>';
//     });
// });

//or specific role
// Route::middleware(['role:admin'])->group(function () {
//     Route::get('/user', function () {
//         return 'You are a user';
//     });
// });

//or specific role
// Route::middleware(['role:user'])->group(function () {
//     Route::get('/user', function () {
//         return 'You are a user';
//     });
// });