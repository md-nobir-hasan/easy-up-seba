<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        if(Auth::user()){
            $user = User::with(['uwbkdn','role','union','union.upazila','uwbkdn.words','union.upazila.district'])->find(Auth::user()->id);
            Inertia::share('auth.user',$user);
            $n['noty_not_read'] =  Auth::user()->unreadNotifications ;
            $n['noty_read'] =  Auth::user()->readNotifications;
            Inertia::share($n);
        }
        return array_merge(parent::share($request), [
            'flash' => [
                'msg' => fn () => $request->session()->get('msg')
            ],
        ]);
    }
}
