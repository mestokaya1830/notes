<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departmants extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    public function oneEmployees()
    {
        return $this->hasOne('App\Models\Employees');
    }

    public function allEmployees()
    {
        return $this->hasMany('App\Models\Employees');
    }
}
