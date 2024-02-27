<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;

class UsersController extends Controller
{
    public function Index(){
        $message = 'Hello you have new message';
        return Blade::render('<h2>{{$message}}</h2>',['message' => $message]);
    }
}