<?php

namespace App\Http\Controllers;

use App\Exports\EkhanaExport;
use App\Exports\UsersExport;
use App\Models\Ekhana;
use App\Http\Requests\StoreEkhanaRequest;
use App\Http\Requests\UpdateEkhanaRequest;
use App\Models\EducationQualification;
use App\Models\FinancialYear;
use App\Models\HouseStructure;
use App\Models\HouseTaxDeposite;
use App\Models\Tax;
use App\Models\Profession;
use App\Models\Religion;
use App\Models\Village;
use App\Models\Word;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class EkhanaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::where('deleted_by',null)->orderBy('id','desc')->get();
            $n['villages'] = Village::where('deleted_by',null)->orderBy('id','desc')->get();
            $n['data'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word'])->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->orderBy('id','desc')->get();
            $n['villages'] = Village::where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->orderBy('id','desc')->get();
            $n['data'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word'])->where('union_id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        else{
            $n['words'] = Word::where('deleted_by',null)->where('id',Auth::user()->word_id)->orderBy('id','desc')->get();
            $n['villages'] = Village::where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();
            $n['data'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word'])->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        $n['tax'] = Tax::latest()->first();
        $n['house_strucs'] = HouseStructure::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Tax/Ekhana/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(Auth::user()->role->name == 'Power'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->get();
            $n['villages'] = Village::where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();
            $n['ekhanas'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word','word.union'])->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->get();
            $n['villages'] = Village::where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();
            $n['ekhanas'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word','word.union'])->where('union_id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        else{
            $n['words'] = Word::with(['union'])->where('deleted_by',null)->where('id',Auth::user()->word_id)->get();
            $n['villages'] = Village::where('deleted_by',null)->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();
            $n['ekhanas'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word','word.union'])->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        // if(Auth::user()->role_id == 1){
        //     $n['words'] = Word::where('deleted_by',null)->orderBy('id','desc')->get();
        //     $n['villages'] = Village::where('deleted_by',null)->orderBy('id','desc')->get();
        // }else{
            // $n['words'] = Word::where('deleted_by',null)->where('id',Auth::user()->word_id)->orderBy('id','desc')->get();
            // $n['villages'] = Village::where('deleted_by',null)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();
        // }
        $n['religions'] = Religion::where('deleted_by',null)->get();
        $n['professions'] = Profession::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['edqualis'] = EducationQualification::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['house_strucs'] = HouseStructure::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['ksum'] = $n['ekhanas']->sum('yearly_house_rent');
        $n['kcount'] = count($n['ekhanas']);


        return Inertia::render('Tax/Ekhana/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
public function store(StoreEkhanaRequest $request)
    {
        // dd($request->all());
        if($request->id){
            $insert = Ekhana::find($request->id);
        }else{
            $insert = new Ekhana();
        }

        $insert->union_id = Word::find($request->word_id)->union_id;
        $insert->word_id = $request->word_id;
        $insert->village_id = $request->village_id;
        $insert->holding_no =  $request->holding_no;
        $insert->yearly_income = $request->yearly_income;
        $insert->bn_name = $request->bn_name;
        $insert->name = $request->name;
        $insert->ed_quali_id = $request->ed_quali_id;
        $insert->phone = $request->phone;
        $insert->spouse_name = $request->spouse_name;
        $insert->mother_name = $request->mother_name;
        $insert->m_male = $request->m_male;
        $insert->m_female = $request->m_female;
        $insert->m_child = $request->m_child;
        $insert->dob = $request->dob;
        $insert->birth_no = $request->birth_no;
        $insert->nid = $request->nid;
        $insert->gender = $request->gender;
        $insert->religion_id = $request->religion_id;
        $insert->profession_id = $request->profession_id;
        $insert->tuboil = $request->tuboil;
        $insert->toilet_type = $request->toilet_type;
        $insert->sc_past = $request->sc_past;
        $insert->sc_present = $request->sc_present;
        $insert->sc_future = $request->sc_future;
        $insert->yearly_house_rent = $request->yearly_house_rent;
        $insert->rent_type = $request->rent_type;
        $insert->land_house = $request->land_house;
        $insert->paka_house = $request->paka_house;
        $insert->adhapaka_house = $request->adhapaka_house;
        $insert->kasa_house = $request->kasa_house;
        $insert->land_cultivate = $request->land_cultivate;
        $insert->infrastructure = $request->infrastructure;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $tax = Tax::latest()->first();
        $f_years = FinancialYear::get();
        $total_amount = round($insert->yearly_house_rent*$tax->price/100);
        $check = HouseTaxDeposite::where('ekhana_id',$insert->id)->first();
        if(!$check){
            foreach($f_years as $f_year){
                $ht_insert = new HouseTaxDeposite();
                $ht_insert->ekhana_id = $insert->id;
                $ht_insert->total_amount = $total_amount;
                $ht_insert->union_id = Word::find($request->word_id)->union_id;
                $ht_insert->word_id = $request->word_id;
                $ht_insert->f_year_id = $f_year->id;
                $ht_insert->save();
            }
        }

        $request->session()->flash('suc_msg',$request->bn_name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.tax.ekhana.index');
        }else{
            return redirect()->route('admin.tax.ekhana.create');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Ekhana $ekhana)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ekhana $ekhana)
    {
        // if(Auth::user()->role_id == 1){
        //     $n['words'] = Word::where('deleted_by',null)->orderBy('id','desc')->get();
        // }else{
            // $n['words'] = Word::where('deleted_by',null)->where('word_id',Auth::user()->word->union_id)->orderBy('id','desc')->get();
        // }
        $n['ekhana'] = Ekhana::with(['village','edQuali','religion','profession','word'])->find($ekhana->id);
        $n['religions'] = Religion::where('deleted_by',null)->get();
        $n['professions'] = Profession::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['villages'] = Village::where('deleted_by',null)->where('word_id',Auth::user()->word_id)->orderBy('id','desc')->get();
        $n['edqualis'] = EducationQualification::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['house_strucs'] = HouseStructure::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Tax/Ekhana/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEkhanaRequest $request, Ekhana $ekhana)
    {
        $ekhana->word_id = $request->word_id;
        $ekhana->village_id = $request->village_id;
        $ekhana->holding_no = $request->holding_no;
        $ekhana->yearly_income = $request->yearly_income;
        $ekhana->bn_name = $request->bn_name;
        $ekhana->name = $request->name;
        $ekhana->ed_quali_id = $request->ed_quali_id;
        $ekhana->phone = $request->phone;
        $ekhana->spouse_name = $request->spouse_name;
        $ekhana->mother_name = $request->mother_name;
        $ekhana->m_male = $request->m_male;
        $ekhana->m_female = $request->m_female;
        $ekhana->m_child = $request->m_child;
        if($request->dob){
            $ekhana->dob = $request->dob;
        }
        $ekhana->birth_no = $request->birth_no;
        $ekhana->nid = $request->nid;
        $ekhana->gender = $request->gender;
        $ekhana->religion_id = $request->religion_id;
        $ekhana->profession_id = $request->profession_id;
        $ekhana->tuboil = $request->tuboil;
        $ekhana->toilet_type = $request->toilet_type;
        $ekhana->sc_past = $request->sc_past;
        $ekhana->sc_present = $request->sc_present;
        $ekhana->sc_future = $request->sc_future;
        $ekhana->paka_house = $request->paka_house;
        $ekhana->adhapaka_house = $request->adhapaka_house;
        $ekhana->kasa_house = $request->kasa_house;
        $ekhana->yearly_house_rent = $request->yearly_house_rent;
        $ekhana->rent_type = $request->rent_type;
        $ekhana->land_house = $request->land_house;
        $ekhana->land_cultivate = $request->land_cultivate;
        $ekhana->infrastructure = $request->infrastructure;
        $ekhana->updated_by = Auth::user()->id;
        $ekhana->save();


        $request->session()->flash('suc_msg',$request->bn_name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.tax.ekhana.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ekhana $ekhana)
    {
        //
    }


}
