<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
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

}
