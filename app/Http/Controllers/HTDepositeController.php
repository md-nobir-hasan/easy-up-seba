<?php

namespace App\Http\Controllers;

use App\Models\HouseTaxDeposite;
use App\Http\Requests\StoreHouseTaxDepositeRequest;
use App\Http\Requests\UpdateHouseTaxDepositeRequest;
use App\Models\Ekhana;
use App\Models\FinancialYear;
use App\Models\Tax;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HTDepositeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::user()->role->name == 'Power'){
            $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear','word','union'])
            ->where('deleted_by',null)
            ->where('deposite_date','!=',null)
            ->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear','word','union'])
            ->where('union_id',Auth::user()->word->union_id)
            ->where('deleted_by',null)->orderBy('id','desc')
            ->where('deposite_date','!=',null)
            ->get();
        }
        else{
            $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear','word','union'])
            ->where('union_id',Auth::user()->word->union_id)
            ->where('word_id',Auth::user()->word_id)
            ->where('deleted_by',null)
            ->where('deposite_date','!=',null)
            ->orderBy('id','desc')
            ->get();
        }
        // $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Tax/Calculation/HouseDeposite/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(Auth::user()->role->name == 'Power'){
            $n['ekhanas'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word','word.union'])->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['ekhanas'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word','word.union'])->where('union_id',Auth::user()->word->union_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        else{
            $n['ekhanas'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','word','word.union'])->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->orderBy('id','desc')->get();
        }
        $n['f_years'] = FinancialYear::where('deleted_by',null)->orderBy('id','desc')->get();
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

    public function approvalIndex(){
        if(Auth::user()->role->name == 'Power'){
            $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear','word','union'])->where('deleted_by',null)->where('approval',2)->orderBy('id','desc')->get();
        }
        elseif(Auth::user()->role->name == 'Union'){
            $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear','word','union'])->where('union_id',Auth::user()->word->union_id)->where('deleted_by',null)->where('approval',2)->orderBy('id','desc')->get();
        }
        else{
            // $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear','word','union'])->where('union_id',Auth::user()->word->union_id)->where('word_id',Auth::user()->word_id)->where('deleted_by',null)->where('approval',2)->orderBy('id','desc')->get();
            $n['data'] = '';
        }
        // $n['data'] = HouseTaxDeposite::with(['createdBy','updatedBy','ekhana','fYear'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Approval/HouseTaxDeposite/Index',$n);
    }
}
