<?php

use Illuminate\Support\Facades\Route;

//clients
Route::middleware(['guest'])->group(function() {
    Route::view('/', 'clients.index');
    Route::view('/about', 'clients.about');
    Route::view('/contact', 'clients.contact');
    Route::view('/register', 'clients.register');
    Route::view('/login', 'clients.login');
});

//admin
Route::middleware(['auth'])->group(function() {
    Route::view('/admin', 'admin.index');
});