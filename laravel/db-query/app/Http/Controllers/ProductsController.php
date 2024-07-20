<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
   public function Index(Request $request)
   {
     return Products::all();
   //   return Products::all()->take(2);
   //   return Products::paginate(3);
   //   return Products::first();
   //   return Products::all()->last();
   //   return Products::insertGetId();
   //   return Products::count();
   //   return Products::max('price');
   //   return Products::min('price');
   //   return Products::avg('price');
   //   return Products::sum('price');

   // $product = Products::create($request->post());
   // $productId = $product->id();

   //when
   // $isAdmin = true;
   // return User::when($isAdmin, function($data){
   //     $data->whereRole('user');
   // })->get();

   // //order
   // return User::whereRole('user')->get();
   // return User::whereRole('user')->orderBy('name')->get();
   // return User::whereRole('user')->orderBy('name','DESC')->get();
   // //custom order
   // return books::orderByRaw(DB::raw("FIELD(price,12.00,15.00,price)"))->get();

   // //where
   // return User::whereId(4)->first();
   // return User::whereId(4)->whereName('admin')->first();
   // return User::whereIdAndName(1,'admin')->first();


   }
}
