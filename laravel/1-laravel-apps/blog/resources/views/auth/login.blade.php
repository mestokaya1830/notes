<x-layout title="Login">
  <h1>Login</h1>
  <div class="container p-5 my-5 border shadow p-3 mb-5 bg-body rounded" style="width: 50%">
    <form action="{{route('login')}}" method="post">
      @csrf
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" name="email" value="{{old('email')}}">
        @error('email')
            <p class="text text-danger mt-2">{{$message}}</p>
        @enderror
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password"  name="password">
        @error('password')
            <p class="text text-danger mt-2">{{$message}}</p>
        @enderror
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"> Remember me
        </label>
      </div>
      @error('login-error')
            <p class="text text-danger mt-2">{{$message}}</p>
        @enderror
      <div class="d-grid">
        <button type="submit" class="btn btn-dark btn-block">Login</button>
      </div>
    </form>
  </div>
</x-layout>