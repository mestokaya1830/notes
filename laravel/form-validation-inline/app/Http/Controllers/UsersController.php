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
        $request->validate([
            'name' => ['required', 'min:2', 'max:20'],
            'email' => ['required', 'max:255'],
            'password' => ['required', 'min:4', 'max:20', 'confirmed']
        ]);

       return($request->username);
        // return($request->input());
        // return($request);
        //or use this
        // return $request->all();
        //or use this
        // return $request->post();
    }
}