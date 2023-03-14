<?php

namespace App\Providers;

use App\Models\Permission;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share('flash',function(){
            return [
                'suc_msg' => Session::get('suc_msg'),
                'err_msg' => Session::get('err_msg'),
            ];
        });
       $permissions = Permission::with('module','role')->where('deleted_by',null)->get();
        Inertia::share('permissions', $permissions);

    }
}
