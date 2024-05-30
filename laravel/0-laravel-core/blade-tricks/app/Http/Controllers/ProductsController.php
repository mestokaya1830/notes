<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
    public function Index(){
        $products = Products::paginate(5);
        return view('products', compact('products'));
    }
}
