<?php

namespace App\Http\Controllers;

use App\Models\HouseTaxDeposite;
use App\Http\Requests\StoreHouseTaxDepositeRequest;
use App\Http\Requests\UpdateHouseTaxDepositeRequest;
use App\Models\Ekhana;
use App\Models\FinancialYear;
use App\Models\Tax;
use Inertia\Inertia;

class HTDepositeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Tax/Calculation/HouseDeposite/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['f_years'] = FinancialYear::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['ekhanas'] = Ekhana::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['taxes'] = Tax::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Tax/Calculation/HouseDeposite/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHouseTaxDepositeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(HouseTaxDeposite $houseTaxDeposite)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HouseTaxDeposite $houseTaxDeposite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHouseTaxDepositeRequest $request, HouseTaxDeposite $houseTaxDeposite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HouseTaxDeposite $houseTaxDeposite)
    {
        //
    }
}
