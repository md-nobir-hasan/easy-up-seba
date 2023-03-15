<?php

use App\Http\Controllers\AjaxController;
use App\Http\Controllers\DeleteController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\EdQualiController;
use App\Http\Controllers\HouseStrucController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaxController;
use App\Http\Controllers\UnionController;
use App\Http\Controllers\UpazilaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VillageController;
use App\Http\Controllers\WordController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

// });


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('/admin')->name('admin.')->group(function () {

    //dashboar rendering
    Route::get('/dashboard', function () {

        $user = User::with('word','role','word.union')->where('deleted_by',null)->where('id',Auth::user()->id)->first();
        Inertia::share('user',$user);
        return Inertia::render('Dashboard');
    })->name('dashboard');

    //Delete funtionality
    Route::get('/admin/{id}/{modal}',[DeleteController::class,'singleDelete'])->name('single.delete');

    //setup
    Route::prefix('/setup')->name('setup.')->group(function(){
        Route::resource('/division',DivisionController::class);
        Route::resource('/district',DistrictController::class);
        Route::resource('/upazila',UpazilaController::class);
        Route::resource('/union',UnionController::class);
        Route::resource('/word',WordController::class);
        Route::resource('/village',VillageController::class);
        Route::resource('/education-qualification',EdQualiController::class);
        Route::resource('/tax',TaxController::class);
        Route::resource('/house-structure',HouseStrucController::class);
        Route::resource('/religion',ReligionController::class);
        Route::resource('/profession',ProfessionController::class);

    });

    //Ekhana Management
    Route::resource('/ekhana',ProfessionController::class);
    //User Management
    Route::prefix('/user')->name('user.')->group(function(){
        Route::resource('/role',RoleController::class);
        Route::resource('/user',UserController::class);
    });

});
