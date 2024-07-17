<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)  {

        $request->validate([
            'username' => ['required','max:255'] ,
            'email' => ['required','max:255', 'email'],
            'password' => ['required', 'min:3', 'confirmed']
        ]);
        dd($request->post());
        // dd($request->username);
        // dd($request->all());
        // dd($request);

        //with custom error----------------------------------------------
        // $request->validate(
        //     [
        //         'username' => ['required','max:255'] ,
        //         'email' => ['required','max:255', 'email'],
        //         'password' => ['required', 'min:3', 'confirmed']
        //     ],
        //     [
        //         'username' => 'Ad alani bos olamaz!',
        //         'email' => 'Email formata uygun degil!',
        //         'password' => 'Sifre alani bos olamaz!'
        //     ]
        // );
        // dd($request->post());
    }
}
