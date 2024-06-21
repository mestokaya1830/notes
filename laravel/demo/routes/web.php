<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('index');
});

Route::get('/user', function() {
    return response('<h1>Mesto</h1>');
});

Route::get('/user/{id}', function($id) {
    return response($id);
});
