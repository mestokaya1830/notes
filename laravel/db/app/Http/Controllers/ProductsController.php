<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function Index()
    {
        $products = DB::table('products')->get();
        return view('products', compact('products'));
    }

    public function Edit($id)
    {
        $product = DB::table('products')->whereId($id)->get();
        return view('edit', compact('product'));
    }

    public function Update(Request $request, $id)
    {
        DB::table('products')->whereId($id)->update([
            'name' => $request->name,
            'price' => $request->price,
            'is_exist' => $request->is_exist
        ]);
        return redirect()->route('productEdit',$id);
    }

    public function Create()
    {
        return view('create');
    }

    public function Store(Request $request)
    {
        DB::table('products')->insert([
            'name' => $request->name,
            'price' => $request->price,
            'is_exist' => $request->is_exist
        ]);
        return redirect()->route('productsIndex');
    }

    public function Delete($id)
    {
        DB::table('products')->whereId($id)->delete();
        return redirect()->route('productsIndex');
    }
}
