<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\DepartmantsController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/employees', [EmployeesController::class,'Employees']);
Route::get('/departmants', [DepartmantsController::class,'Departmants']);
Route::get('/oneemployees', [DepartmantsController::class,'OneEmployees']);
Route::get('/allemployees', [DepartmantsController::class,'AllEmployees']);
Route::get('/departmantsemployees', [DepartmantsController::class,'DepartmantsEmployees']);
