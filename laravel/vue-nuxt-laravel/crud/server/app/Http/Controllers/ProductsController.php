<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return Products::get();
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        Products::create($request->post());
    }

    public function show(Products $products, $id)
    {
        return Products::find($id);
    }

    public function edit(Products $products)
    {
    }

    public function update(Request $request, Products $products, $id)
    {
        Products::find($id)->update($request->except(['_method', '_token']));
    }

    public function destroy(Products $products, $id)
    {
        Products::whereId($id)->delete();
    }
}
