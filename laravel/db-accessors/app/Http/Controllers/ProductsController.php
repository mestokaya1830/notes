<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
    public function Index()
    {
        //go to products model that function return all uppercase
        return Products::get();
    }
}
