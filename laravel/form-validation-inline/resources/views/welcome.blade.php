<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <style>
        form {
            display: flex;
            flex-direction: column;
            width: 200px;
        }

        form>input {
            margin: 5px 0;
        }
    </style>
</head>

<body class="antialiased">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/users">Users</a></li>
    </ul>
    <form action="{{ route('register') }}" method="post">
        @csrf
        <input type="text" name="name" id="" placeholder="Name..." value="{{ old('name') }}">
        @error('name')
            <p style="color: red;">{{ $message }}</p>
        @enderror
        <input type="password" name="password" id="" placeholder="Password...">
        @error('password')
            <p style="color: red;">{{ $message }}</p>
        @enderror
        <input type="password" name="password_confirmation" id="" placeholder="Confirm Password...">
        <button type="submit">Register</button>
    </form>
</body>

</html>
