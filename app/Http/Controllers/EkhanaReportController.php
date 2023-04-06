<?php

namespace App\Http\Controllers;

use App\Models\Word;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EkhanaReportController extends Controller
{
 public function villageBasedLevy(){
    if(Auth::user()->role->name == 'Power'){
        $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
    }
    elseif(Auth::user()->role->name == 'Union'){
        $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->get();
    }
    else{
        $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('id',Auth::user()->word_id)->get();
    }
    Inertia::render('Tax/Calculation/VillageLeavy/Index',$n);
 }
}
