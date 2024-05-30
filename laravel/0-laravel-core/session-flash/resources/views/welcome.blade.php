<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body class="antialiased">
        <form action="{{ route('create') }}" method="post">
            @csrf
            <input type="text" name="name" placeholder="Name">
            <input type="password" name="password" placeholder="Password">
            <input type="submit" value="Add">
        </form>
        @if (session('user'))
            <div style="color:green;">{{ session('user') }}created</div>
        @endif
    </body>
</html>
