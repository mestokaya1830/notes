<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Auth::user()->posts()->latest()->paginate(6);
        // $posts = Post::all();
        return view('admin.index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newPost = $request->validate([
            'title' => ['required', 'max:255'],
            'body' => ['required']
        ]);
        // Post::create($newPost);//without relationship
        Auth::user()->posts()->create($newPost);
        return back()->with('success', 'Post Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $admin) //with resource route param (not param must be with route)
    {
        return view('admin.show', ['post' => $admin]);
    }
    //or manually id
    // public function show($id) //with resource route param
    // {
    //     $post = Post::find($id);
    //     return view('admin.show', ['post' => $post]);
    // }


    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}

