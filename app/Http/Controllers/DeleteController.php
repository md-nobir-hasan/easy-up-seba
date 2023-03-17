<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
class DeleteController extends Controller
{
    public function singleDelete(Request $req,$id,$modal){
        $modalClass =  '\\App\\Models\\'.$modal;
        $id = (int)$id;
        $delete = $modalClass::find($id);
        $delete->name = $delete->name.' deleted by '.Auth::user()->name;
        $delete->deleted_at = Carbon::now();
        $delete->deleted_by = Auth::user()->id;
        $delete->save();
        $req->session()->flash('suc_msg',$delete->name.' সফলভাবে ডিলিট হয়েছে');
        return redirect()->back();
    }
}
