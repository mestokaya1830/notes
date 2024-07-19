<x-layout title="Dashboard">
  <h1 style="text-align: center">Dashboard</h1>
  <p style="text-align:center;color:green;">{{session('success')}}</p>
  <div class="container p-5 my-5 border shadow p-3 mb-5 bg-body rounded">
    <h4>Create New Post</h4>
      <form action="{{route('posts.store')}}" method="post">
        @csrf
        <div class="mb-3 mt-3">
          <label for="title" class="form-label">Title</label>
          <input type="title" class="form-control" id="title" name="title" value="{{old('title')}}">
          @error('email')
              <p class="text text-danger mt-2">{{$message}}</p>
          @enderror
        </div>
        <div class="mb-3 mt-3">
          <label for="body" class="form-label">Body</label>
          <textarea class="form-control" id="body" name="body" rows="10"></textarea>
          @error('email')
              <p class="text text-danger mt-2">{{$message}}</p>
          @enderror
        </div>
       
        @error('login-error')
              <p class="text text-danger mt-2">{{$message}}</p>
          @enderror
        <div class="d-grid">
          <button type="submit" class="btn btn-dark btn-block">Create</button>
        </div>
      </form>
    </div>
</x-layout>