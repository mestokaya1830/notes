<x-layout title="Register">
  <h1>Register</h1>
  <div class="container p-5 my-5 border shadow p-3 mb-5 bg-body rounded" style="width: 50%">
    <form action="{{route('register')}}" method="post">
      @csrf
      <div class="mb-3 mt-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" name="name" value="{{old('name')}}">
        @error('name')
            <p class="text text-danger mt-2">{{$message}}</p>
        @enderror
      </div>
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
      <div class="mb-3">
        <label for="password_confirmation" class="form-label">Confirm-Password</label>
        <input type="password" class="form-control" id="password_confirmation"  name="password_confirmation">
      </div>
      
      <div class="d-grid">
        <button type="submit" class="btn btn-dark btn-block">Register</button>
      </div>
    </form>
  </div>
</x-layout>