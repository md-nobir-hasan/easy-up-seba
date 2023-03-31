<?php

use App\Http\Controllers\AjaxController;
use App\Http\Controllers\DeleteController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\EdQualiController;
use App\Http\Controllers\EkhanaController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\FYearController;
use App\Http\Controllers\HouseStrucController;
use App\Http\Controllers\HTDepositeController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaxController;
use App\Http\Controllers\UnionController;
use App\Http\Controllers\UpazilaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VillageController;
use App\Http\Controllers\WordController;
use App\Models\Ekhana;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
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
    Artisan::call('view:clear');
    Artisan::call('cache:clear');
    Artisan::call('optimize:clear');
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('/ajax')->name('ajax.')->group(function(){
    Route::get('/fetch/{model}/{field}/{value}/{with?}/{field2?}/{value2?}',[AjaxController::class,'dataFetch'])->name('fetch');
    Route::get('/holding/fetch/{vil_id}',[AjaxController::class,'holdingFetch'])->name('holding.fetch');
    Route::post('/ekhana/autosave',[AjaxController::class,'khanaAutoSave'])->name('khana.autosave');
    Route::post('/ekhana/fetch',[AjaxController::class,'ekhana'])->name('ekhana.fetch');
    Route::post('/update/{model}',[AjaxController::class,'update'])->name('update');
    Route::post('afield/update',[AjaxController::class,'afieldUpdate'])->name('afield.update');
});


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('/admin')->name('admin.')->group(function () {

    //dashboar rendering
    Route::get('/dashboard', function () {
        // dd(Auth::user()->role->name);
        if(Auth::user()->role->name == 'Power'){
            $n['ekhanas'] = Ekhana::where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['ekhanas'] = Ekhana::where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->orderBy('id','desc')->get();
        }
        else{
            $n['ekhanas'] = Ekhana::where('deleted_by',null)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();
        }
        $n['ksum'] = $n['ekhanas']->sum('yearly_income');
        $n['kcount'] = count($n['ekhanas']);
        return Inertia::render('Dashboard',$n);
    })->name('dashboard');

    //Delete funtionality
    Route::get('/admin/{id}/{modal}',[DeleteController::class,'singleDelete'])->name('single.delete');
    Route::get('/admin/delete/fetch/{id}/{modal}',[DeleteController::class,'singleDeleteFetch'])->name('single.delete.fetch');

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
        Route::resource('/financial-year',FYearController::class);

    });
    //Tax Management
    Route::prefix('tax')->name('tax.')->group(function(){
        //Ekhana Management
        Route::resource('/ekhana',EkhanaController::class);

        //Calculation Management
        Route::prefix('/calculation')->name('calculation.')->group(function(){
            Route::resource('/deposite',HTDepositeController::class);
        });

    });


    //Export Import
        Route::get('ekhana/export/excel', [ExportController::class, 'exportExcel'])->name('ekhana.export.excel');
        Route::get('ekhana/export/pdf', [ExportController::class, 'exportPdf'])->name('ekhana.export.pdf');
        Route::get('deposite/export/excel', [ExportController::class, 'exportExcel'])->name('deposite.export.excel');
        Route::get('deposite/export/pdf', [ExportController::class, 'exportPdf'])->name('deposite.export.pdf');


    //User Management
    Route::prefix('/user')->name('user.')->group(function(){
        Route::resource('/role',RoleController::class);
        Route::resource('/user',UserController::class);
    });

    //Admin Aproval Management
    Route::prefix('/approval')->name('approval.')->group(function(){
        //Aproval for text Deposite
        Route::prefix('/tax-deposite')->name('tax-deposite.')->group(function(){
            Route::get('/index',[HTDepositeController::class,'approvalIndex'])->name('index');
        });
    });



});
