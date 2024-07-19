<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class AuthController extends Controller
{
    public function register(Request $request)  {

        $newUser = $request->validate([
            'name' => ['required','max:255'] ,
            'email' => ['required','max:255', 'email', 'unique:users'],
            'password' => ['required', 'min:3', 'confirmed']
        ]);
        // dd($request->post());
        $createdUser = User::create($newUser);
        Auth::login($createdUser);
        return redirect()->route('posts.index');
        // dd($request->username);
        // dd($request->all());
        // dd($request);

        //with custom error----------------------------------------------
        // $request->validate(
        //     [
        //         'name' => ['required','max:255'] ,
        //         'email' => ['required','max:255', 'email'],
        //         'password' => ['required', 'min:3', 'confirmed']
        //     ],
        //     [
        //         'name' => 'Ad alani bos olamaz!',
        //         'email' => 'Email formata uygun degil!',
        //         'password' => 'Sifre alani bos olamaz!'
        //     ]
        // );
        // dd($request->post());
    }

    function login(Request $request) {
        $loginUser = $request->validate([
            'email' => ['required','max:255', 'email'],
            'password' => ['required']
        ]);

        if(Auth::attempt($loginUser, $request->remember)){
            return redirect()->intended('dashboard');
        } else {
            return back()->withErrors(['login-error' => 'Wrong credentials']);
        }
    }
    function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('posts.index');
    }
}
