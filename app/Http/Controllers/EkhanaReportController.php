<?php

namespace App\Http\Controllers;

use App\Models\FinancialYear;
use App\Models\Tax;
use App\Models\Village;
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
        $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
    }
    else{
        $n['words'] = Word::with(['union'])->where('deleted_by',null)
                        // ->where('id',Auth::user()->word_id)
                        ->get();
    //word wise data fetch
        $i = 1;
        foreach(Auth::user()->uwbkdn as $word){
            // dd($word);
            if($i == 1){
                    $n['words'] =  $n['words']->where('word_id',$word->word_id);
            }else{
                    $n['words'] =  $n['words']->orWhere('word_id',$word->word_id);
            }
            $i++;
        }
    //End word wise data fetch
    }

    $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();
    $n['tax'] = Tax::where('deleted_at',null)->orderBy('id','desc')->first();
    $n['villages'] = Village::where('deleted_at',null)
                    // ->where('word_id',auth::user()->word_id)
                    ->orderBy('id','desc')
                    ->get();
    $i = 1;
    foreach(Auth::user()->uwbkdn as $word){
        // dd($word);
        if($i == 1){
                $n['villages'] =  $n['villages']->where('word_id',$word->word_id);
        }else{
                $n['villages'] =  $n['villages']->orWhere('word_id',$word->word_id);
        }
        $i++;
    }

    return Inertia::render('Tax/Calculation/VillageLevy/Index',$n);
 }

 public function wordBasedLevy(){
    if(Auth::user()->role->name == 'Power'){
        $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
    }
    elseif(Auth::user()->role->name == 'Union'){
        $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
    }
    else{
        $n['words'] = Word::with(['union'])->where('deleted_by',null)
                        // ->where('id',Auth::user()->word_id)
                        ->get();

        //word wise data fetch
            $i = 1;
            foreach(Auth::user()->uwbkdn as $word){
                // dd($word);
                if($i == 1){
                        $n['words'] =  $n['words']->where('word_id',$word->word_id);
                }else{
                        $n['words'] =  $n['words']->orWhere('word_id',$word->word_id);
                }
                $i++;
            }
        //End word wise data fetch
    }

    $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();
    $n['tax'] = Tax::where('deleted_at',null)->orderBy('id','desc')->first();
    $n['villages'] = Village::where('deleted_at',null)
                    // ->where('word_id',auth::user()->word_id)
                    ->orderBy('id','desc')
                    ->get();

           //word wise data fetch
           $i = 1;
           foreach(Auth::user()->uwbkdn as $word){
               // dd($word);
               if($i == 1){
                       $n['villages'] =  $n['villages']->where('word_id',$word->word_id);
               }else{
                       $n['villages'] =  $n['villages']->orWhere('word_id',$word->word_id);
               }
               $i++;
           }
       //End word wise data fetch

    // dd($n);
    return Inertia::render('Tax/Calculation/WordLevy/Index',$n);
 }

    public function WordTopListLevy(){
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/TopList/Levy/Index',$n);
    }


    public function EkhanDailyPosting(){
        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->union_id)->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)
                            ->get();
            //word wise data fetch
            $i = 1;
            foreach(Auth::user()->uwbkdn as $word){
                // dd($word);
                if($i == 1){
                        $n['words'] =  $n['words']->where('word_id',$word->word_id);
                }else{
                        $n['words'] =  $n['words']->orWhere('word_id',$word->word_id);
                }
                $i++;
            }
        //End word wise data fetch
        }
        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/TopList/DailyPosting/Index',$n);
    }

    public function EkhanDailyPostingTopsheet(){

        $n['f_years'] = FinancialYear::where('deleted_at',null)->orderBy('id','desc')->get();

        return Inertia::render('Tax/TopList/DailyPostingTopsheet/Index',$n);
    }
}
