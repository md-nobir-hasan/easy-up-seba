<?php

namespace App\Http\Controllers;

use App\Events\HouseTaxDepositeAproval;
use App\Models\Ekhana;
use App\Models\FinancialYear;
use App\Models\HouseTaxDeposite;
use App\Models\Notification;
use App\Models\Tax;
use App\Models\Union;
use App\Models\User;
use App\Models\Village;
use App\Models\Word;
use App\Notifications\HTaxDepoDelAproval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use function Termwind\render;

class AjaxController extends Controller
{
    public function dataFetch($modal,$field,$value,$field2 =null,$value2 = null){
        $modalClass =  '\\App\\Models\\'.$modal;
        $val = (int)$value;
        $val2 = (int)$value2;
        // if($with){
        //     $data = $modalClass::with(['word','village','createdBy'])->where($field,$val)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
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
            elseif($modal == 'Ekhana'){

                if($value2 == 'all'){ //word_id
                    $data = $modalClass::with(['union','word','village','createdBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
                }elseif($value == 'all'){
                    $data = $modalClass::with(['union','word','village','createdBy'])->where($field2,$val2)->where('deleted_by',null)->orderBy('id','desc')->get();
                }else{
                    $data = $modalClass::with(['union','word','village','createdBy'])->where($field,$val)->where($field2,$val2)->where('deleted_by',null)->orderBy('id','desc')->get();
                }
            }
            else{
                $data = $modalClass::where($field,$val)->where('deleted_by',null)->orderBy('id','desc')->get();
            }
        // }
        return response()->json($data);
    }

    public function holdingFetch(Request $request, $word_id){
        $word_id = (int)$word_id;
        $word = Word::find($word_id);
        $latest_ekhana = Ekhana::where('union_id',$word->union_id)
                        ->where('word_id',$word_id)
                        ->get();
        $holding_prefix = $word->union->upazila->district->code .$word->union->upazila->code .$word->union->code . $word->code . "0000";
        $holding = $holding_prefix + count($latest_ekhana);
    return response()->json($holding);
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
        $autosave->infrastructure = $request->paka_house;
        $autosave->infrastructure = $request->adhapaka_house;
        $autosave->infrastructure = $request->kasa_house;
        $autosave->save();
        return response()->json($autosave);
    }

    public function ekhana(Request $req){
        $n['ekhana'] = Ekhana::with(['village','word'])->where('holding_no',$req->ekhana_id)->first();
        $tax = Tax::latest()->first();
       $n['ht_deposite'] = HouseTaxDeposite::where('ekhana_id',$n['ekhana']->id)->where('f_year_id',$req->f_year_id)->first();
        if(!$n['ht_deposite']){
            $insert = new HouseTaxDeposite();
            $insert->union_id =  $n['ekhana']->union_id;
            $insert->word_id = $n['ekhana']->word_id;
            $insert->ekhana_id = $n['ekhana']->id;
            $insert->f_year_id = $req->f_year_id;
            $insert->total_amount = round($n['ekhana']->yearly_house_rent*$tax->price/100);
            $insert->arrears = round($n['ekhana']->yearly_house_rent*$tax->price/100);
            $insert->save();
            $n['ht_deposite'] = $insert;
        }
        return response()->json($n);
    }

    public function update(Request $req, $model){
        $model = '\\App\\Models\\'.$model;
            // return $model;
            // return response()->json($req->all());
        $housetax = $model::find($req->id);

        if($req->kisti == 1){
            $housetax->paid_amount = $req->paid_amount;
            $housetax->f_kisti = $req->paid_amount;
            $housetax->f_date = $req->deposite_date;
        }
        elseif($req->kisti == 2){
            $housetax->paid_amount = $req->paid_amount;
            $housetax->prev_arrears = ceil($housetax->prev_arrears/2) ;
            $housetax->f_kisti = ceil($req->paid_amount/2);
            $housetax->s_kisti = $req->paid_amount - $housetax->f_kisti;
            $housetax->s_date = $req->deposite_date;
        }
        elseif($req->kisti == 3){
            $housetax->paid_amount = $req->paid_amount;
            $housetax->prev_arrears = ceil($housetax->prev_arrears/3) ;
            $housetax->f_kisti = ceil($req->paid_amount/3);
            $housetax->s_kisti = ceil($req->paid_amount/3);
            $housetax->t_kisti = $req->paid_amount - $housetax->f_kisti - $housetax->s_kisti;
            $housetax->t_date = $req->deposite_date;
        }
        elseif($req->kisti == 4){
            $housetax->paid_amount = $req->paid_amount;
            $housetax->prev_arrears = 0;
            $housetax->f_kisti = ceil($req->paid_amount/4);
            $housetax->s_kisti = ceil($req->paid_amount/4);
            $housetax->t_kisti = ceil($req->paid_amount/4);
            $housetax->fo_kisti = $req->paid_amount - $housetax->f_kisti - $housetax->s_kisti - $housetax->t_kisti;
            $housetax->fo_date = $req->deposite_date;
        }

        $housetax->deposite_date = $req->deposite_date;
        $housetax->save();

        if($req->paid_amount && $req->ekhana_id){
            $ekhana_update = Ekhana::where('holding_no',$req->ekhana_id)->first();
            $ekhana_update->tax_paid += $req->paid_amount;
            $ekhana_update->save();
        }
        return  $housetax;
    }
    public function afieldUpdate(Request $req){
        $model = '\\App\\Models\\'.$req->model;
        // return $model;
        $id = (int)$req->id;
       $update =  $model::find($id);
       $update[$req->field] = $req->field_value;
       $update->save();
        return response()->json($update);
    }

    public function houseDepositeUpdate(Request $req){
        $model = '\\App\\Models\\'.$req->model;
        // return $model;
        $id = (int)$req->id;
       $update =  $model::find($id);
       $update[$req->field] = $req->field_value;
       $update->save();
       $users = User::all();

       foreach($users as $user){
            if($this->ncustomUserCheck($user->role_id,'Tax Deposite Approval')){
                $user->notify(new HTaxDepoDelAproval(Auth::user(),'বাসাবাড়ি কর মুছার আবেদন'));
            }
       }
        return response()->json($user->notifications);
    }

  public  function notyRead(Request $req){
        $user  = Auth::user();
        foreach ($user->unreadNotifications as $notification) {
            $notification->markAsRead();
        }
        return true;
    }

    public function ekhanaVillLevy(Request $req){
        $n['village_levy'] = DB::table('house_tax_deposites')
                                ->join('ekhanas','house_tax_deposites.ekhana_id','=','ekhanas.id')
                                ->join('villages','ekhanas.village_id','=','villages.id')
                                ->join('words','house_tax_deposites.word_id','=','words.id')
                                ->join('financial_years','house_tax_deposites.f_year_id','=','financial_years.id')
                                ->where('ekhanas.word_id',$req->word_id)
                                ->where('ekhanas.village_id',$req->village_id)
                                ->where('ekhanas.infrastructure',$req->infrastructure)
                                ->where('house_tax_deposites.f_year_id',$req->f_year_id)
                                ->select('ekhanas.*','villages.name as vill_name','words.name as w_name','house_tax_deposites.*','financial_years.from as fy_from','financial_years.to as fy_to')
                                ->get();

        return response()->json($n);
    }
    public function TolistLevy(Request $req){
        $f_year = FinancialYear::find($req->f_year_id);

        if(Auth::user()->role->name == 'Power'){
            $n['toplist_levy'] = Word::with(["village",
                                            "ekhana",
                                            'houseTaxPaid'=> function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            'houseTaxUnpaid'=> function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            "houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            "prevTaxUnpaid" => function ($query) use ($req) {$query->where('f_year_id','<', $req->f_year_id);},
                                            "prevTaxPaid" => function ($query) use ($req,$f_year) {$query->where('f_year_id','<', $req->f_year_id)->whereBetween('house_tax_deposites.updated_at',["01/01/$f_year->from","01/01/$f_year->to"]);},
                                            ])
                                            ->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['toplist_levy'] = Word::with(["village",
                                            "ekhana",
                                            'houseTaxPaid'=> function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            'houseTaxUnpaid'=> function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            "houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            "prevTaxUnpaid" => function ($query) use ($req) {$query->where('f_year_id','<', $req->f_year_id);},
                                            "prevTaxPaid" => function ($query) use ($req,$f_year) {$query->where('f_year_id','<', $req->f_year_id)->whereBetween('house_tax_deposites.updated_at',["01/01/$f_year->from","01/01/$f_year->to"]);},
                                            ])
                                            ->where('union_id',Auth::user()->word->union_id)
                                            ->get();
        }
        else{
            $n['toplist_levy'] = Word::with(["village",
                                            "ekhana",
                                            'houseTaxPaid'=> function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            'houseTaxUnpaid'=> function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            "houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id);},
                                            "prevTaxUnpaid" => function ($query) use ($req) {$query->where('f_year_id','<', $req->f_year_id);},
                                            "prevTaxPaid" => function ($query) use ($req,$f_year) {$query->where('f_year_id','<', $req->f_year_id)->whereBetween('house_tax_deposites.updated_at',["01/01/$f_year->from","01/01/$f_year->to"]);},
                                            ])
                                            ->where('union_id',Auth::user()->word->union_id)
                                            ->where('word_id',Auth::user()->word_id)
                                            ->get();
        }


        return response()->json($n);
    }

    public function TolistDailyPosting(Request $req){
        if(Auth::user()->role->name == 'Power'){
            $n['dailypost'] = Word::with(["houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id)->whereBetween('deposite_date',[$req->from_date,$req->to_date]);},
                                            "houseTax.ekhana",
                                            "houseTax.ekhana.village",
                                            "houseTax.ekhana.word",
                                            ])
                                            ->find($req->word_id);
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['dailypost'] = Word::with(["houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id)->whereBetween('deposite_date',[$req->from_date,$req->to_date]);},
                                             "houseTax.ekhana",
                                             "houseTax.ekhana.village",
                                             "houseTax.ekhana.word",
                                            ])
                                            ->find($req->word_id);
        }
        else{
            $n['dailypost'] = Word::with(["houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id)->whereBetween('deposite_date',[$req->from_date,$req->to_date]);},
                                            "houseTax.ekhana",
                                            "houseTax.ekhana.village",
                                            "houseTax.ekhana.word",
                                            ])
                                            // ->where('union_id',Auth::user()->word->union_id)
                                            // ->where('word_id',Auth::user()->word_id)
                                            ->find($req->word_id);
        }


        return response()->json($n);
    }


    public function TolistDailyPostingTopsheet(Request $req){
        // dd($req->all());
        if(Auth::user()->role->name == 'Power'){
            $n['ajdata'] = Word::with([
                                            "houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id)->whereBetween('deposite_date',[$req->from_date,$req->to_date]);},
                                             "houseTax.ekhana",
                                             "houseTax.ekhana.village",
                                             ])
                                            ->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['ajdata'] = Word::with([
                                            "houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id)->whereBetween('deposite_date',[$req->from_date,$req->to_date]);},
                                             "houseTax.ekhana",
                                             "houseTax.ekhana.village",
                                             ])
                                            ->where('union_id',Auth::user()->word->union_id)
                                            ->get();
        }
        else{
            $n['ajdata'] = Word::with([
                                            "houseTax" => function ($query) use ($req) {$query->where('f_year_id', $req->f_year_id)->whereBetween('deposite_date',[$req->from_date,$req->to_date]);},
                                             "houseTax.ekhana",
                                             "houseTax.ekhana.village",
                                             ])
                                            ->where('union_id',Auth::user()->word->union_id)
                                            ->where('word_id',Auth::user()->word_id)
                                            ->get();
        }


        return response()->json($n);
    }

    public function allBillcountOld(Request $req){

        // $n['bills'] = DB::table('house_tax_deposites')
        //         ->join('financial_years','house_tax_deposites.f_year_id','=','financial_years.id')
        //         ->join('ekhanas','house_tax_deposites.ekhana_id','=','ekhanas.id')
        //         ->join('words','house_tax_deposites.ekhana_id','=','words.id')
        //         ->where('ekhanas.word_id',$req->word_id)
        //         ->where('ekhanas.village_id',$req->village_id)
        //         ->where('house_tax_deposites.f_year_id',$req->f_y_id)
        //         ->whereDate('house_tax_deposites.deposite_date','=',$req->deposite_date)
        //         ->select('house_tax_deposites.*')
        //         ->get();
        $n['bills'] = DB::table('house_tax_deposites')
        ->join('financial_years','house_tax_deposites.f_year_id','=','financial_years.id')
        ->join('ekhanas','house_tax_deposites.ekhana_id','=','ekhanas.id')
        ->join('words','house_tax_deposites.ekhana_id','=','words.id')
        ->where('ekhanas.word_id',$req->word_id)
        ->where('ekhanas.village_id',$req->village_id)
        ->where('house_tax_deposites.f_year_id',$req->f_year_id)
        ->whereDate('house_tax_deposites.deposite_date','=',$req->deposite_date)
        ->select('house_tax_deposites.*','ekhanas.holding_no','ekhanas.bn_name','ekhanas.spouse_name','financial_years.from','financial_years.to','words.name as w_name')
        ->get();
        return response()->json($n);
    }
}


