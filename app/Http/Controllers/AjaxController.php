<?php

namespace App\Http\Controllers;

use App\Models\Ekhana;
use App\Models\HouseTaxDeposite;
use App\Models\Tax;
use App\Models\Union;
use App\Models\User;
use App\Models\Village;
use App\Models\Word;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function Termwind\render;

class AjaxController extends Controller
{
    public function dataFetch($modal,$field,$value,$field2 =null,$value2 = null){
        $modalClass =  '\\App\\Models\\'.$modal;
        $val = (int)$value;
        $val2 = (int)$value2;
        // if($with){
        //     $data = $modalClass::with(['houseStruc','word','village','houseStruc.houseStruc','createdBy'])->where($field,$val)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        // }else{
            if($modal == 'Union'){
                if(Auth::user()->role->name == 'Power'){
                   $data = Union::with(['division','district','upazila','createdBy','updatedBy'])->where($field,$val)->where('deleted_by',null)->orderBy('id','desc')->get();
                }
                elseif(Auth::user()->role->name == 'Union'){
                   $data = Union::with(['division','district','upazila','createdBy','updatedBy'])->where($field,$val)->where('id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
                }
                else{
                    $data = Union::with(['division','district','upazila','createdBy','updatedBy'])->where($field,$val)->where('id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
                }
            }
            elseif($modal == 'Word'){
                if(Auth::user()->role->name == 'Power'){
                   $data = Word::with(['division','district','upazila','union','createdBy','updatedBy'])->where($field,$val)->where('deleted_by',null)->orderBy('id','desc')->get();
                }
                elseif(Auth::user()->role->name == 'Union'){
                   $data = Word::with(['division','district','upazila','union','createdBy','updatedBy'])->where($field,$val)->where('union_id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
                }
                else{
                   $data = Word::with(['division','district','upazila','union','createdBy','updatedBy'])->where($field,$val)->where('id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
                }
            }

            // elseif($modal == 'Village'){
            //     if(Auth::user()->role->name == "Power"){
            //         $data = Village::with(['division','district','upazila','union','word','createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
            //     }
            //     elseif(Auth::user()->role->name == "Union"){
            //         $data = Village::with(['division','district','upazila','union','word','createdBy','updatedBy'])->where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->orderBy('id','desc')->get();
            //     }
            //     else{
            //         $data = Village::with(['division','district','upazila','union','word','createdBy','updatedBy'])->where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();

            //     }
            // }
            elseif($modal == 'Ekhana'){
                $data = $modalClass::with(['houseStruc','word','village','houseStruc.houseStruc','createdBy'])->where($field,$val)->where($field2,$val2)->where('deleted_by',null)->orderBy('id','desc')->get();
                // if(Auth::user()->role->name == 'Power'){
                //     $data = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','houseStruc','word','houseStruc.houseStruc'])->where('deleted_by',null)->orderBy('id','desc')->get();
                // }
                // elseif(Auth::user()->role->name == 'Union'){
                //     $data = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','houseStruc','word','houseStruc.houseStruc'])->where('union_id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
                // }
                // else{
                //     $data = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','houseStruc','word','houseStruc.houseStruc'])->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
                // }
            }
            else{
                $data = $modalClass::where($field,$val)->where('deleted_by',null)->orderBy('id','desc')->get();
            }
        // }
        return response()->json($data);
    }

    public function holdingFetch(Request $request, $vil_id){
        $ekhana = Ekhana::where('union_id',Auth::user()->word->union_id)
                        ->where('word_id',Auth::user()->word_id)
                        ->latest()
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
            $autosave->updated_by = Auth::user()->id;
        }else{
            $autosave = new Ekhana();
            $autosave->created_by = Auth::user()->id;
        }
        $autosave->union_id = Word::find($request->word_id)->union_id;
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

    public function ekhana(Request $req){
        $n['ekhana'] = Ekhana::with(['village','word'])->find($req->ekhana_id);
        $tax = Tax::latest()->first();
       $n['ht_deposite'] = HouseTaxDeposite::where('ekhana_id',$req->ekhana_id)->where('f_year_id',$req->f_year_id)->first();
        if(!$n['ht_deposite']){
            $insert = new HouseTaxDeposite();
            $insert->ekhana_id = $req->ekhana_id;
            $insert->f_year_id = $req->f_year_id;
            $insert->total_amount = $n['ekhana']->yearly_house_rent*$tax->price/100;
            $insert->arrears = $n['ekhana']->yearly_house_rent*$tax->price/100;
            $insert->save();
            $n['ht_deposite'] = $insert;
        }
        return response()->json($n);
    }

    public function update(Request $req, $model){
        $model = '\\App\\Models\\'.$model;
        // return $model;
        $model::find($req->id)->update($req->all());
        return $model;
    }
}


