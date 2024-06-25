<?php

use Illuminate\Support\Facades\Route;

//not: if you use wtih name you must call with route-helper in blade links
//like so  <a href="{{ route('home') }}" class="links">Home</a>

// short version----------------------------------------------------
// Route::view('/','pages/index')->name('home');
// Route::view('/','pages/auth/register')->name('register');

// short version without name---------------------------------------
// Route::view('/','pages/index');
// Route::view('/','pages/auth/register');

//long version----------------------------------------------------
// Route::get('/', function () {
//     return view('pages/index');
// })->name('home');

// Route::get('/register', function () {
//     return view('pages/auth/register');
// })->name('register');

//long version without name----------------------------------------------------
// Route::get('/', function () {
//     return view('pages/index');
// });

// Route::get('/register', function () {
//     return view('pages/auth/register');
// });


Route::get('/', function () {
    return view('pages/index');
})->name('home');

Route::get('/register', function () {
    return view('pages/auth/register');
})->name('register');