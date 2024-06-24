<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|min:2|max:255',
            'email' => 'required|email|min:10|max:255',
            'password' => 'required|min:4|max:255'
        ];
    }
}
