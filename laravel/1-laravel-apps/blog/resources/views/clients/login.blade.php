<x-layout title="Register">
  <div class="container" >
    <h1 class="container-title">Login</h1>
    <form action="#" method="post" class="container content rounded p-5">
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
      <div class="d-grid gap-2 ">
        <input type="submit" class="btn-submit mt-3" id="submit" value="Login">
      </div>
    </form>
  </div>
</x-layout>