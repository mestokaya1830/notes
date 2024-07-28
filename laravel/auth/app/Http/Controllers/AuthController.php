<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Mail as Mail;
use App\Mail\VerficationMail;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $newUser = $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'max:255', 'email', 'unique:users'],
            'password' => ['required', 'max:255', 'confirmed'],
        ]);
        $registeredUser = User::create($newUser);
        Auth::login($registeredUser);
        return redirect()->route('client.index');
    }

    public function login(Request $request)
    {
        $loginUser = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($loginUser, $request->remember)) {
            return redirect()->route('admin.index');
        } else {
            return back()->withErrors([
                'credential' => 'Wrong credential!'
            ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('client.index');
    }

    public function emailVerfication(Request $request)
    {
        // Mail::to(auth()->user()->email)->send($request->email);//loggedin user
        Mail::to($request->email)->send(new VerficationMail());

        return redirect()->route('client.index');
    }

    public function resetPassword(Request $request, User $user)
    {
        $resetInfo = $request->validate([
            'email' => ['required', 'max:255', 'email'],
            'password' => ['required', 'max:255', 'confirmed'],
        ]);

        $user = User::where('email', '=', $request->email)->first();
        if ($user) {
            $user->update([
                'password' => $request->password
            ]);
            return redirect()->route('login');
        } else {
            dd('No result!');
        }
    }
}
