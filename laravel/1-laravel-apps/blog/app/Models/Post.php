<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        // 'user_id', if you need this when you dont create relationship in user controller
        'title',
        'body'
    ];
}
