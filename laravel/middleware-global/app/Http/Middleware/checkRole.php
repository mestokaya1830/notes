<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class checkRole
{
    public function handle(Request $request, Closure $next)
    {
        //this is a global middleware
        //go to kernel page and add this middleware in protected $middleware section
        echo 'I am global a middleware';
        //real example
        // if (auth()->user()->role !== 'admin') {
        //     return  redirect()->route('dashboard');
        // }

        //open browser ant type localhost:8000/admin?role=user
        if($request->role && $request->role != 'user'){
            return redirect('/');
        }
        return $next($request);
    }
}
