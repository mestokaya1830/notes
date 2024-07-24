<nav class="navbar">
    <a href="{{ route('index') }}" class="links">Home</a>

    @guest
        <div>
            <a href="{{ route('register') }}" class="links">Register</a>
            <a href="{{ route('login') }}" class="links">Login</a>
        </div>
    @endguest
    @auth
    <div style="display: flex;align-items:center;">
        <label class="links">{{auth()->user()->name}}</label>
        <div class="dropdown">
            <img src="https://picsum.photos/200/300" alt="" class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="{{ route('posts.index') }}">Dashboard</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <form action="{{route('logout')}}" method="post">
                        @csrf
                        <button type="submit" class="dropdown-item">Logout</button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
    @endauth
</nav>
