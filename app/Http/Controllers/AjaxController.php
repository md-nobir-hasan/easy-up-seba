<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class AjaxController extends Controller
{
    public function dataFetch($modal,$field,$value){
        $modalClass =  '\\App\\Models\\'.$modal;
        $val = (int)$value;
        $data = $modalClass::where($field,$val)->where('deleted_by',null)->orderBy('id','desc')->get();
        return response()->json($data);
    }

}
