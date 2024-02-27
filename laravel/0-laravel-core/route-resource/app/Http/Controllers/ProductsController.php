<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Http\Requests\ProductsRequest;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return view('products', compact('products'));
    }

    public function create()
    {
        return view('create');
    }

    public function store(ProductsRequest $request)
    {
        Products::create($request->post());
        return redirect('/products');

    }

    public function show($id)
    {
        return Products::find($id);
    }

    public function edit($id)
    {
        $product = Products::find($id);
        return view('edit', compact('product'));
    }

    public function update(ProductsRequest $request, $id)
    {
        Products::find($id)->update($request->except(['_method', '_token']));
        return redirect('/products');
    }

    public function destroy($id)
    {
        Products::whereId($id)->delete();
        return redirect('/products');
    }
}
