<?php

namespace App\Http\Controllers;

use App\Models\Ekhana;
use App\Http\Requests\StoreEkhanaRequest;
use App\Http\Requests\UpdateEkhanaRequest;
use App\Models\EducationQualification;
use App\Models\HouseStructure;
use App\Models\Profession;
use App\Models\Religion;
use App\Models\Village;
use App\Models\Word;
use Inertia\Inertia;

class EkhanaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = Ekhana::with(['createdBy','updatedBy','village','edQuali','religion','profession','houseStruc','word'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Ekhana/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['words'] = Word::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['religions'] = Religion::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['professions'] = Profession::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['villages'] = Village::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['ed_qualis'] = EducationQualification::where('deleted_by',null)->orderBy('id','desc')->get();
        $n['house_strucs'] = HouseStructure::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Ekhana/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEkhanaRequest $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEkhanaRequest $request, Ekhana $ekhana)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ekhana $ekhana)
    {
        //
    }
}
