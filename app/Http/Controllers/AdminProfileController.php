<?php

namespace App\Http\Controllers;

use App\Models\PointHistory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminProfileController extends Controller
{
    public function pointHistroy(){
        $n['data'] = User::withSum('pointHistory as total_sp','spent_points')->with(['pointHistory'])->find(Auth::user()->id);

        return Inertia::render('Profile/PointHistory',$n);
    }
}
