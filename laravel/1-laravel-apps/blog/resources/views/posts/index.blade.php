<x-layout title="Posts">
  <h1>Latest Posts</h1>

  @if ($posts)
  <div class="row">
    @foreach ($posts as $item)
    <div class="col-sm-6 mb-2 mt-2">
        <div class="card shadow p-3 mb-5 bg-body rounded">
          <div class="card-body">
            <h5 class="card-title">{{$item->title}}</h5>
            <p class="text-muted">{{$item->created_at->diffForHumans()}} </p>
            <p class="card-text">{{ Str::words($item->body, 20, '...') }}</p>
            <a href="#" class="btn btn-secondary">Go somewhere</a>
          </div>
        </div>
      </div>
      @endforeach
    </div>
    <ul class="pagination pagination-lg justify-content-end mt-3">
      <div class="page-item">{{$posts->links()}}</div>
    </ul>
  @else
      <h1>No Data</h1>
  @endif
</x-layout>