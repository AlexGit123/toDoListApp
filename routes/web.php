<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TaskController;
use App\Models\Task;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/{view?}', [HomeController::class, 'index'])->where('view', '(.*)')->name('landing');

Route::get('/{any}', function () {

    //Un-comment commented code to test polymorphic relationship

    // $user = User::create([
    //     'name' => 'Alexandro'
    // ]);

    // $user->task()->create([
    //     'description' => 'testing polymorph. relationship'
    // ]);

    return view('landing');
})->where('any', '.*');
