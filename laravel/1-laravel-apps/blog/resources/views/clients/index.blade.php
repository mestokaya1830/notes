<x-layout title="Home">
    <h1>Latest Posts</h1>
    @if ($posts)
        <div class="row">
            @foreach ($posts as $item)
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{{ $item->title }}</h3>
                            <h6 class="card-subtitle mb-2 text-muted">{{ $item->created_at->diffForHumans() }}</h6>
                            <p class="card-text">{{ Str::words($item->body, 25, '...') }}</p>
                            <a href="#" class="card-link">Card link</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    @endif
    <div class="pagination pagination-lg justify-content-end">{{ $posts->links() }}</div>
</x-layout>
