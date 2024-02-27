<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body class="antialiased">
       <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/users">Users</a></li>
       </ul>

       <form action="/adduser" method="post">
        @csrf
        <input type="text" name="name" placeholder="Name">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" value="Add New User">
    </form>
    </body>
</html>
