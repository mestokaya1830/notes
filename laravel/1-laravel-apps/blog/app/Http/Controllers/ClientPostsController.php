<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class ClientPostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(6);
        // $posts = Post::all();
        return view('clients.index', ['posts' => $posts]);
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
}
