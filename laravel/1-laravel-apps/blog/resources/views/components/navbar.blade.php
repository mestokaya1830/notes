<div class="navbar">
  <div>
    <a href="{{route('home')}}" class="links">Home</a>
    <a href="{{route('posts')}}" class="links">Posts</a>
  </div>
  <div>
    @guest
        <a href="{{route('register')}}" class="links">Register</a>
        <a href="{{route('login')}}" class="links">Login</a>
    @endguest
    @auth
    <a class="links" href="#">{{auth()->user()->name}}</a>
    <div class="btn-group profile">
      <button class="btn dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        <img src="https://picsum.photos/200/300" alt="No Image" class="logged-image">
      </button>
      <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
        <li><a class="dropdown-item" href="{{route('dashboard')}}">Dashboard</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li>
          <form action="{{route('logout')}}" method="post">
            @csrf
            <button type="submit" class="dropdown-item">Logout</button>
          </form>
        </li>
      </ul>
    </div>
    @endauth
    
  </div>
</div>