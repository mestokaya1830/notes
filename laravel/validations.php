<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => ['required', 'email'],
            'name' => ['required', 'min:2', 'max:50'],
            'lastname' => ['required', 'min:2', 'max:50'],
            'password' => ['required', 'min:6', 'max:100', 'confirmed'],
            'phone' => ['required', 'min:10', 'max:10'],
            'phone_format' => ['required;', 'min:14', 'max:14'],
            'birthdate' => ['required', 'date', 'before:-18 years'],
            'age' => ['required', 'before:-18'],
            'start' => ['required', 'date', 'after:now'],
            'finish' => ['required', 'date', 'after:start'],
            'image' => ['image', 'required', 'max:1024', 'mimes:jpg,jpeg,png'],
        ];
    }
}
