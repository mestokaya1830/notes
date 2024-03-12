<?php

use App\Http\Controllers\admin\QuestionsController;
use App\Http\Controllers\admin\QuizesController;
use App\Http\Controllers\joiners\MainController;
use Illuminate\Support\Facades\Route;

// Route::view('/', function () {
//     return view('welcome');
// });
Route::view('/', 'welcome'); //use short form

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [MainController::class, 'index'])->name('dashboard');
    Route::get('/quize/{id}', [MainController::class, 'joinQuiz'])->name('join.quiz');
    Route::post('/quize/{id}/answers', [MainController::class, 'quizAnswers'])->name('quiz.answers');
    Route::get('/quize/{id}/results', [MainController::class, 'quizResults'])->name('quiz.results');
    Route::get('/quize/{id}/results/details', [MainController::class, 'quizResultDetails'])->name('quiz.result.details');
});

Route::group(['middleware' => ['auth', 'isAdmin']], function () {
    Route::resource('/admin/quizes', QuizesController::class);
    Route::resource('/admin/quizes/{quizes_id}/questions', QuestionsController::class);
});
