<?php

namespace App\Http\Controllers;

use App\Models\HouseStructure;
use App\Http\Requests\StoreHouseStructureRequest;
use App\Http\Requests\UpdateHouseStructureRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HouseStrucController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = HouseStructure::with(['createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/HouseStructure/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Setup/HouseStructure/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHouseStructureRequest $request)
    {
        $insert = new HouseStructure();
        $insert->name = $request->name;
        $insert->price = $request->price;
        $insert->des = $request->des;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' Saved Successfully');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.house-structure.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(HouseStructure $HouseStructure)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HouseStructure $HouseStructure)
    {
        $n['mdata'] = $HouseStructure;
        return Inertia::render('Setup/HouseStructure/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHouseStructureRequest $request, HouseStructure $HouseStructure)
    {
        $HouseStructure->name = $request->name;
        $HouseStructure->price = $request->price;
        $HouseStructure->des = $request->des;
        $HouseStructure->updated_at = Carbon::now();
        $HouseStructure->updated_by = Auth::user()->id;
        $HouseStructure->save();
        $request->session()->flash('suc_msg',$HouseStructure->name.' Updated Successfully');
        return redirect()->route('admin.setup.house-structure.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HouseStructure $HouseStructure)
    {
        //
    }
}
