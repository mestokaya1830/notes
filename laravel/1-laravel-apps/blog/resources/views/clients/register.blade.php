<x-layout title="Register">
  <div class="container" >
    <h1 class="container-title">Register</h1>
    <form action="#" method="post" class="container content rounded p-5">
      <div class="mb-3">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div>
          <input type="text" class="form-control" id="name" value="{{old('name')}}">
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="col-sm-2 col-form-label">email</label>
        <div>
          <input type="email" class="form-control" id="email" value="{{old('email')}}">
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="col-sm-2 col-form-label">password</label>
        <div>
          <input type="password" class="form-control" id="password">
        </div>
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="col-sm-2 col-form-label">Confirm Password</label>
        <div>
          <input type="password_confirmation" class="form-control" id="password_confirmation">
        </div>
      </div>
      <div class="d-grid gap-2">
        <input type="submit" class="btn-submit mt-3" id="submit" value="Register">
      </div>
    </form>
  </div>
</x-layout>