<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <style>
            form{
                display: flex;
                flex-direction: column;
                width: 200px;
            }
            form > input{
                margin: 5px 0;
            }
        </style>
    </head>
    <body class="antialiased">
       <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/about?role=user">About</a></li>
        <li><a href="/contact?role=user">Contact</a></li>
        <li><a href="/admin?role=user">Admin</a></li>
       </ul>
    </body>
</html>
