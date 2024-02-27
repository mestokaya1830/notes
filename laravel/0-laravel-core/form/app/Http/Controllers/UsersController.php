<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;

class UsersController extends Controller
{
    public function Index(){
        return 'Hello User';
    }

    public function Create(Request $request){
        return $request->input();
        //or use this
        // return $request->all();
        //or use this
        // return $request->post();
    }
}