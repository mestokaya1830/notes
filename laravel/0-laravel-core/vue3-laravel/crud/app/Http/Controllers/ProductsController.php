<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Requests\ProductsRequest;

class ProductsController extends Controller
{
    public function index()
    {
        return Products::all();
    }

    public function create()
    {
    }

    public function store(ProductsRequest $request)
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

    public function update(ProductsRequest $request, Products $products, $id)
    {
        Products::whereId($id)->update($request->validated());
    }

    public function destroy(Products $products, $id)
    {
        Products::whereId($id)->delete();
        return Products::all();
    }
}
