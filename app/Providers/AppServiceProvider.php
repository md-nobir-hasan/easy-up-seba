<?php

namespace App\Providers;

use App\Models\Notification;
use App\Models\Permission;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Telescope\TelescopeServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share('flash', function () {
            return [
                'suc_msg' => Session::get('suc_msg'),
                'err_msg' => Session::get('err_msg'),
            ];
        });
        if(Schema::hasTable('permissions')) {
            $permissions = Permission::with('module', 'role')->where('deleted_by', null)->get();
            Inertia::share('permissions', $permissions);
        }
        if(Schema::hasTable('notifications')) {
            Notification::whereBetween('created_at', [now()->subDays(7),'!=',now()])->delete();
        }

        JsonResource::withoutWrapping();

        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }

    }
}
