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
        if($ekhana){
            return $ekhana->id;
        }else{
            return 0;
        }
    }

    public function khanaAutoSave(Request $request){
        if($request->id){
            $autosave = Ekhana::find($request->id);
        }else{
            $autosave = new Ekhana();
        }
        $autosave->word_id = $request->word_id;
        $autosave->village_id = $request->village_id;
        $autosave->holding_no =  $request->holding_no;
        $autosave->yearly_income = $request->yearly_income;
        $autosave->bn_name = $request->bn_name;
        $autosave->name = $request->name;
        $autosave->ed_quali_id = $request->ed_quali_id;
        $autosave->phone = $request->phone;
        $autosave->spouse_name = $request->spouse_name;
        $autosave->mother_name = $request->mother_name;
        $autosave->m_male = $request->m_male;
        $autosave->m_female = $request->m_female;
        $autosave->m_child = $request->m_child;
        $autosave->dob = $request->dob;
        $autosave->birth_no = $request->birth_no;
        $autosave->nid = $request->nid;
        $autosave->gender = $request->gender;
        $autosave->religion_id = $request->religion_id;
        $autosave->profession_id = $request->profession_id;
        $autosave->tuboil = $request->tuboil;
        $autosave->toilet_type = $request->toilet_type;
        $autosave->sc_past = $request->sc_past;
        $autosave->sc_present = $request->sc_present;
        $autosave->sc_future = $request->sc_future;
        $autosave->yearly_house_rent = $request->yearly_house_rent;
        $autosave->rent_type = $request->rent_type;
        $autosave->land_house = $request->land_house;
        $autosave->land_cultivate = $request->land_cultivate;
        $autosave->infrastructure = $request->infrastructure;
        $autosave->save();
        return response()->json($autosave);
    }

}
