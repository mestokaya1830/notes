<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function Create(Request $request){
        session()->flash( 'user', $request->name);
        return redirect('/');
    }
}
