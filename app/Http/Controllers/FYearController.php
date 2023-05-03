<?php

namespace App\Http\Controllers;

use App\Models\FinancialYear;
use App\Http\Requests\StoreFinancialYearRequest;
use App\Http\Requests\UpdateFinancialYearRequest;
use App\Models\Ekhana;
use App\Models\HouseTaxDeposite;
use App\Models\Tax;
use App\Models\Word;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FYearController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = FinancialYear::with(['createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/FinancialYear/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Setup/FinancialYear/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFinancialYearRequest $request)
    {
        $insert = new FinancialYear();
        $insert->from = $request->from;
        $insert->to = $request->to;
        $insert->created_by = Auth::user()->id;
        $insert->save();

        //Insert data into ekhana tax bkkdn table
        $tax = Tax::latest()->first();
        $ekhanas = Ekhana::get();
        $check = HouseTaxDeposite::where('f_year_id',$insert->id)->first();

        if(!$check){
            foreach($ekhanas as $ekhana){
                $total_amount = round($ekhana->yearly_house_rent*$tax->price/100);
                $subek_htd = HouseTaxDeposite::where('ekhana_id',$ekhana->id)->latest()->first();
                $prev_arrears = $subek_htd->total_amount + $subek_htd->prev_arrears - $subek_htd->paid_amount;
                $ht_insert = new HouseTaxDeposite();
                $ht_insert->f_year_id = $insert->id;
                $ht_insert->total_amount = $total_amount;
                $ht_insert->prev_arrears = $prev_arrears;
                $ht_insert->union_id = $ekhana->union_id;
                $ht_insert->word_id = $ekhana->word_id;
                $ht_insert->ekhana_id = $ekhana->id;
                $ht_insert->save();
            }
        }
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.financial-year.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(FinancialYear $FinancialYear)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FinancialYear $FinancialYear)
    {
        $n['mdata'] = $FinancialYear;
        return Inertia::render('Setup/FinancialYear/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFinancialYearRequest $request, FinancialYear $FinancialYear)
    {
        $FinancialYear->from = $request->from;
        $FinancialYear->to = $request->to;
        $FinancialYear->updated_at = Carbon::now();
        $FinancialYear->updated_by = Auth::user()->id;
        $FinancialYear->save();
        $request->session()->flash('suc_msg',$FinancialYear->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.financial-year.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FinancialYear $FinancialYear)
    {
        //
    }
}
