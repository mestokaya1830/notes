<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
    public function Index()
    {
        return $products = Products::get(['name','price']);
        return view('products', compact('products'));
    }

    public function Edit($id)
    {
        $product = Products::whereId($id)->get();
        return view('edit', compact('product'));
    }

    public function Update(Request $request, $id)
    {
        Products::whereId($id)->update($request->except(['_method', '_token']));
        return redirect()->route('productEdit',$id);
    }

    public function Create()
    {
        return view('create');
    }

    public function Store(Request $request)
    {
        Products::create($request->post());
        return redirect()->route('productsIndex');
    }

    public function Delete($id)
    {
        Products::whereId($id)->delete();
        return redirect()->route('productsIndex');
    }
}
