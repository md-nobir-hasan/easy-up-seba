<?php

use App\Http\Controllers\AjaxController;
use App\Http\Controllers\DeleteController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UpazilaController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('/ajax')->name('ajax.')->group(function(){
    Route::get('/fetch/{model}/{field}/{value}',[AjaxController::class,'dataFetch'])->name('fetch');
});

//removing this make an error but why, search it
// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
    Route::get('/dashboard',[AjaxController::class,'dashboard'])->name('dashboard');
// });


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('/admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/admin/{id}/{modal}',[DeleteController::class,'singleDelete'])->name('single.delete');

    //setup
    Route::prefix('/setup')->name('setup.')->group(function(){
        Route::resource('/division',DivisionController::class);
        Route::resource('/district',DistrictController::class);
        Route::resource('/upazila',UpazilaController::class);

    });

    //User Management
    Route::prefix('/user')->name('user.')->group(function(){
        Route::resource('/role',RoleController::class);
        Route::resource('/user',UserController::class);
    });

});
