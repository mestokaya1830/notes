<x-layout title="Admin Posts">
    <h1 style="margin-bottom: 30px;">Create New Post</h1>
    <div class="text text-success">{{session('success')}}</div>
    <div class="text text-success">{{session('delete')}}</div>
    <div class="text text-success">{{session('update')}}</div>
    <form action="{{route('admin.store')}}" method="post" class="border rounded p-5 mb-5" enctype="multipart/form-data">
        @csrf
        <div class="mb-3 row">
            <label for="title" class="form-label">Title</label>
            <div>
                <input type="text" class="form-control" name="title" id="title" value="{{old('title')}}">
                <div class="text text-danger">
                    @error('title')
                        {{ $message }}
                    @enderror
                </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="body" class="form-label">Body</label>
            <div>
                <textarea class="form-control" name=body rows="10" id="body"></textarea>
                <div class="text text-danger">
                    @error('body')
                        {{ $message }}
                    @enderror
                </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="body" class="form-label">Image</label>
            <div>
                <input type="file" name="image" id="image">
                <div class="text text-danger">
                    @error('image')
                        {{ $message }}
                    @enderror
                </div>
            </div>
        </div>

        <div class="d-grid">
            <button type="submit" class="btn btn-dark btn-lg">Create</button>
        </div>
    </form>

    <h1 style="margin-bottom: 30px;">{{Auth::user()->name}} Posts / {{$posts->total()}}</h1>
    @if ($posts)
        <div class="row">
            @foreach ($posts as $item)
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img src="{{asset('storage/'.$item->image)}}" alt="">
                            <h3 class="card-title">{{ $item->title }}</h3>
                            <h6 class="card-subtitle mb-2 text-muted">{{ $item->created_at->diffForHumans() }} / </h6>
                            <p class="card-text">{{ Str::words($item->body, 25, '...') }}</p>
                            <a href="{{route('admin.show', $item)}}" class="card-link">read more</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    @endif
    <div class="pagination pagination-lg justify-content-end">{{ $posts->links() }}</div>
</x-layout>
