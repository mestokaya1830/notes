<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <link rel="stylesheet" href="/main.css">
    </head>
    <body>
      @include('components/navbar')
      <main class="router">
        @yield('router')
      </main>
    </body>
</html>
