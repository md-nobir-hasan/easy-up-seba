<?php

namespace App\Http\Controllers;

use App\Models\Ekhana;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function dashboard(){
        if(Auth::user()->role->name == 'Power'){
            $n['ekhanas'] = Ekhana::where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['ekhanas'] = Ekhana::where('deleted_by',null)->where('union_id',Auth::user()->union_id)->orderBy('id','desc')->get();
        }
        else{
            $n['ekhanas'] = Ekhana::whereIn('word_id',$this->aryExtrt())->get();
        }
        $n['ksum'] = $n['ekhanas']->sum('yearly_income');
        $n['kcount'] = count($n['ekhanas']);
        return Inertia::render('Dashboard',$n);
    }

    public function pointErr(){
        return Inertia::render('validationErr/Point');
    }
}
