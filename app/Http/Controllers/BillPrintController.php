<?php

namespace App\Http\Controllers;

use App\Models\Ekhana;
use App\Models\FinancialYear;
use App\Models\HouseTaxDeposite;
use App\Models\Village;
use App\Models\Word;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BillPrintController extends Controller
{
    public function singleOld(){

        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('id',Auth::user()->word_id)->get();
            $n['ekhanas'] = Ekhana::with(['union','word'])->where('deleted_by',null)->where('word_id',Auth::user()->word_id)->get();
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/BillPrint/SingleOld/Index',$n);
    }

    public function singleOldShow(Request $req){
        $n['bill'] = HouseTaxDeposite::query()->with(['fYear','ekhana','ekhana.word'])
                                        ->where('ekhana_id',$req->ekhana_id)
                                        ->where('f_year_id',$req->f_y_id)
                                        ->whereDate('deposite_date','=',$req->deposite_date)
                                        ->first();
            if(!$n['bill']){
                return back()->with('msg','কোন তথ্য পাওয়া যায়নি');
            }
        $n['previous_arrears'] = $n['bill']->previousArrears();

        return Inertia::render('Tax/BillPrint/SingleOld/Show',$n);
    }
}
