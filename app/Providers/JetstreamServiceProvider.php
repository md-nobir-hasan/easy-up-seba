<?php

namespace App\Providers;

use App\Actions\Jetstream\DeleteUser;
use Illuminate\Support\ServiceProvider;
use Laravel\Jetstream\Jetstream;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Fortify;

class JetstreamServiceProvider extends ServiceProvider
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
        $this->configurePermissions();

        Jetstream::deleteUsersUsing(DeleteUser::class);
        Fortify::authenticateUsing(function (Request $request) {
            $user = User::where('email', $request->email_phone)
                        ->orWhere('phone', $request->email_phone)
                        ->first();

            if ($user &&
                Hash::check($request->password, $user->password)) {
                return $user;
            }

             //points check
            // $user = User::find($user->id);
            // dd($user->points);
           if($user){
            if( $user->points != null){
                if($user->points<1){
                    dd('কোন ক্রেডিট নাই।') ;
                }
            }
           }
        });

    }

    /**
     * Configure the permissions that are available within the application.
     */
    protected function configurePermissions(): void
    {
        Jetstream::defaultApiTokenPermissions(['read']);

        Jetstream::permissions([
            'create',
            'read',
            'update',
            'delete',
        ]);
    }
}
