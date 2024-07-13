<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
   public function Index()
   {
    //  return Products::all();
     $products = Products::paginate(3);
     return view('products', compact('products'));
   }
}
