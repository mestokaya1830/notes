<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Departmants;

class DepartmantsController extends Controller
{
    public function Departmants()
    {
        return Departmants::all();
    }

    public function OneEmployees()
    {
        return Departmants::find(1)->oneEmployees;
    }

    public function AllEmployees()
    {
        return Departmants::find(1)->allEmployees;
    }

    public function DepartmantsEmployees()
    {
        return Departmants::with('allEmployees')->get();
    }
}