<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return view('pages/products/index');
    }
    public function details($id){
        return view('pages/products/details', ['id' => $id]);
    }
    public function edit($id){
        return view('pages/products/edit', ['id' => $id]);
    }
}
