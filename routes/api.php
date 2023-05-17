<?php

use App\Http\Controllers\TradeLicenseController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::resource('/trade-license', TradeLicenseController::class, ['except' => ['update']]);
Route::post('/update', [TradeLicenseController::class,'index'])->name('update');
