<nav class="navbar">
    @guest
      <div>
        <a href="/" class="links">Home</a>
        <a href="/about" class="links">About</a>
        <a href="/contact" class="links">Contact</a>
      </div>
      <div>
      <a href="/register" class="links">Register</a>
      <a href="/login" class="links">Login</a>
    @endguest
    @auth
      <div class="dropdown">
        <button class="btn dropdown-toggle btn-profile" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://picsum.photos/200/300" alt="">
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Dashboard</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
    @endauth
  </div>
</nav>