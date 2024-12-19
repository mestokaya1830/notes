<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{env('APP_NAME') }} / {{ $title }} </title>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
  @include('./components/navbar')
  <main class="layout">
    {{ $slot }}
  </main>
</body>
</html>