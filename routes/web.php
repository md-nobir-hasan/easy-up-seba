<?php

use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\AjaxController;
use App\Http\Controllers\Api\TradeLicenseController;
use App\Http\Controllers\BazarController;
use App\Http\Controllers\BillPrintController;
use App\Http\Controllers\DeleteController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\EdQualiController;
use App\Http\Controllers\EkhanaController;
use App\Http\Controllers\EkhanaReportController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\FYearController;
use App\Http\Controllers\HouseStrucController;
use App\Http\Controllers\HTDepositeController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaxController;
use App\Http\Controllers\TradeLicenseController;
use App\Http\Controllers\UnionController;
use App\Http\Controllers\UpazilaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VillageController;
use App\Http\Controllers\WordController;
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
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
    ]);
});


Route::prefix('/ajax')->name('ajax.')->group(function () {
    Route::get('/fetch/{model}/{field}/{value}/{with?}/{field2?}/{value2?}', [AjaxController::class,'dataFetch'])->name('fetch');
    Route::post('/holding/fetch', [AjaxController::class,'holdingFetch'])->name('holding.fetch');
    Route::post('/ekhana/autosave', [AjaxController::class,'khanaAutoSave'])->name('khana.autosave');
    Route::post('/ekhana/fetch', [AjaxController::class,'ekhana'])->name('ekhana.fetch');
    Route::post('/simpleupdate', [AjaxController::class,'simpleUpdate'])->name('simple_update');
    Route::post('/update/{model}', [AjaxController::class,'update'])->name('update');
    Route::post('/afield/update', [AjaxController::class,'afieldUpdate'])->name('afield.update');
    Route::post('/noty/read', [AjaxController::class,'notyRead'])->name('noty.read');
    Route::post('/house-deposite/update', [AjaxController::class,'houseDepositeUpdate'])->name('house.deposite.update');
    Route::post('/ekhana/village/levy', [AjaxController::class,'ekhanaVillLevy'])->name('ekhana.vlevy');
    Route::post('/ekhana/toplist/levy', [AjaxController::class,'TolistLevy'])->name('ekhana.toplist.levy');
    Route::post('/ekhana/toplist/daily/posting', [AjaxController::class,'TolistDailyPosting'])->name('ekhana.toplist.daily.posting');
    Route::post('/ekhana/toplist/daily/posting/topsheet', [AjaxController::class,'TolistDailyPostingTopsheet'])->name('ekhana.toplist.daily.posting.topsheet');
    Route::post('/allbillcount', [AjaxController::class,'allBillcountOld'])->name('allbillcount');
    Route::get('/bnmoney/{num}', [AjaxController::class,'bnMoney'])->name('bnmoney');
});


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('/admin')->name('admin.')->group(function () {

    Route::resource('/trade-license', TradeLicenseController::class, ['except' => ['update']]);
    Route::post('/trade-license/update/{tradeLicense}', [TradeLicenseController::class,'update'])->name('trade-license.update');
    //dashboar rendering
    Route::get('/dashboard', [FrontendController::class,'dashboard'])->name('dashboard');

    //Profile features
    Route::prefix('/profile')->name('profile.')->group(function () {
        Route::get('/point-histories', [AdminProfileController::class,'pointHistroy'])->name('pointhistory');
    });

    //Delete funtionality
    Route::get('/admin/{id}/{modal}', [DeleteController::class,'singleDelete'])->name('single.delete');
    Route::get('/admin/delete/fetch/{id}/{modal}', [DeleteController::class,'singleDeleteFetch'])->name('single.delete.fetch');
    Route::get('/admin/housetaxdepo/delete/{id}', [DeleteController::class,'houseTaxDepo'])->name('housetaxdepo.delete');

    //setup
    Route::prefix('/setup')->name('setup.')->group(function () {
        Route::resource('/division', DivisionController::class);
        Route::resource('/district', DistrictController::class);
        Route::resource('/upazila', UpazilaController::class);
        Route::resource('/union', UnionController::class);
        Route::resource('/word', WordController::class);
        Route::resource('/village', VillageController::class);
        Route::resource('/education-qualification', EdQualiController::class);
        Route::resource('/tax', TaxController::class);
        Route::resource('/house-structure', HouseStrucController::class);
        Route::resource('/religion', ReligionController::class);
        Route::resource('/profession', ProfessionController::class);
        Route::resource('/financial-year', FYearController::class);
        Route::resource('/bazar', BazarController::class);

    });
    //Tax Management
    Route::prefix('tax')->name('tax.')->group(function () {
        //Ekhana Management
        Route::resource('/ekhana', EkhanaController::class);

        //Calculation Management
        Route::prefix('/calculation')->name('calculation.')->group(function () {
            Route::resource('/deposite', HTDepositeController::class);
            // Reports
            ///village levy
            Route::get('/village-leavy', [EkhanaReportController::class,'villageBasedLevy'])->name('village-leavy.index');
            Route::get('/word-leavy', [EkhanaReportController::class,'wordBasedLevy'])->name('word-leavy.index');
        });

        //Top list/ daily posting
        Route::prefix('/toplist')->name('toplist.')->group(function () {
            // Reports
            ///village levy
            Route::get('/levy', [EkhanaReportController::class,'WordTopListLevy'])->name('levy');

            //dail posting
            Route::get('/daily/posting', [EkhanaReportController::class,'EkhanDailyPosting'])->name('diily.posting');
            Route::get('/daily/topsheet', [EkhanaReportController::class,'EkhanDailyPostingTopsheet'])->name('diily.posting.topsheet');
        });
        //Bill Print
        Route::prefix('/bill-print')->name('bill.print.')->group(function () {
            ///Single bill print
            Route::get('/single', [BillPrintController::class,'single'])->name('single');
            Route::get('/single/show', [BillPrintController::class,'singleShow'])->name('single.show');

            ///All bill print
            Route::get('/all', [BillPrintController::class,'all'])->name('all');
            Route::get('/all/show', [BillPrintController::class,'allShow'])->name('all.show');

            ///Single bill print old
            Route::get('/old/single', [BillPrintController::class,'singleOld'])->name('single.old');
            Route::get('/single/old/show', [BillPrintController::class,'singleOldShow'])->name('single.old.show');

            ///All bill print old
            Route::get('/old/all', [BillPrintController::class,'allOld'])->name('all.old');
            Route::get('/old/all/show', [BillPrintController::class,'allOldShow'])->name('all.old.show');

            ///All POS bill print
            Route::get('/all/pos', [BillPrintController::class,'allpos'])->name('all.pos');
            Route::get('/all/pos/show', [BillPrintController::class,'allposShow'])->name('all.pos.show');

            ///Single POS bill print
            Route::get('/single/pos', [BillPrintController::class,'singlepos'])->name('single.pos');
            Route::get('/single/pos/show', [BillPrintController::class,'singleposShow'])->name('single.pos.show');


        });

    });


    //Export Import
    Route::get('ekhana/export/excel', [ExportController::class, 'exportExcel'])->name('ekhana.export.excel');
    Route::get('ekhana/export/pdf', [ExportController::class, 'exportPdf'])->name('ekhana.export.pdf');
    Route::get('deposite/export/excel', [ExportController::class, 'exportExcel'])->name('deposite.export.excel');
    Route::get('deposite/export/pdf', [ExportController::class, 'exportPdf'])->name('deposite.export.pdf');
    Route::get('village-leavy/export/excel', [ExportController::class, 'villLevyExpExl'])->name('villleavy.export.excel');


    //User Management
    Route::prefix('/user')->name('user.')->group(function () {
        Route::resource('/role', RoleController::class);
        Route::resource('/user', UserController::class);
    });

    //Admin Aproval Management
    Route::prefix('/approval')->name('approval.')->group(function () {
        //Aproval for text Deposite
        Route::prefix('/tax-deposite')->name('tax-deposite.')->group(function () {
            Route::get('/index', [HTDepositeController::class,'approvalIndex'])->name('index');
        });
    });



});
