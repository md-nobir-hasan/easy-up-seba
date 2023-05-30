<?php

namespace App\Http\Controllers;

use App\Models\HouseTaxDeposite;
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
    public function singleDeleteFetch(Request $req,$id,$modal){
        $modalClass =  '\\App\\Models\\'.$modal;
        $id = (int)$id;
        $delete = $modalClass::find($id)->delete();
        if($modal == 'HouseTaxDeposite'){
            $data = $modalClass::with('ekhana')->where('deleted_by',null)->orderBy('id','desc')->get();
        }else{
            $data = $modalClass::where('deleted_by',null)->orderBy('id','desc')->get();
        }
        return response()->json($data);
    }

    public function houseTaxDepo(Request $req,$id){
        $update = HouseTaxDeposite::find($id);
        $update->update([
                'f_kisti' => 0,
                's_kisti' => 0,
                't_kisti' => 0,
                'fo_kisti' => 0,
                'deposite_date' => null,
                'f_date' => null,
                's_date' => null,
                't_date' => null,
                'fo_date' => null,
                'paid_amount' => 0,
        ]);
        $data = HouseTaxDeposite::where('deleted_by',null)->where('deposite_date','!=',null)->orderBy('id','desc')->get();

        return response()->json($data);
    }
}
