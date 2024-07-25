<x-layout title="Home">
    <h3>{{ $post->title }} / {{$post->user->name}}</h3>
    @if ($post)
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">{{ $post->title }}</h3>
                        <h6 class="card-subtitle mb-2 text-muted">{{ $post->created_at->diffForHumans() }} / {{$post->user->name}}</h6>
                        <p class="card-text">{{ $post->body }}</p>
                    </div>
                </div>
            </div>
        </div>
    @endif
</x-layout>
