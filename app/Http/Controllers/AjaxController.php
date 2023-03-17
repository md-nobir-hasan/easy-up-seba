<?php

namespace App\Http\Controllers;

use App\Models\Ekhana;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function Termwind\render;

class AjaxController extends Controller
{
    public function dataFetch($modal,$field,$value,$with=null){
        $modalClass =  '\\App\\Models\\'.$modal;
        $val = (int)$value;
        if($with){
            $data = $modalClass::with(['houseStruc','word','village','houseStruc.houseStruc','createdBy'])->where($field,$val)->where('deleted_by',null)->orderBy('id','desc')->get();
        }else{
            $data = $modalClass::where($field,$val)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        return response()->json($data);
    }

    public function holdingFetch(Request $request, $vil_id){
        $ekhana = Ekhana::where('word_id',Auth::user()->word_id)
                        ->where('village_id',$vil_id)
                        ->orderBy('id','desc')
                        ->first();
                        // echo $vil_id;
        if($ekhana){
            return $ekhana->id;
        }else{
            return 0;
        }
    }

}
