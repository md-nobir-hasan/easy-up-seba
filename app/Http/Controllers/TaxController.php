<?php

namespace App\Http\Controllers;

use App\Models\Tax;
use App\Http\Requests\StoreTaxRequest;
use App\Http\Requests\UpdateTaxRequest;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TaxController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = Tax::with(['createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Tax/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Setup/Tax/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaxRequest $request)
    {
        $insert = new Tax();
        $insert->name = $request->name;
        $insert->price = $request->price;
        $insert->des = $request->des;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.tax.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Tax $Tax)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tax $Tax)
    {
        $n['mdata'] = $Tax;
        return Inertia::render('Setup/Tax/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaxRequest $request, Tax $Tax)
    {
        $Tax->name = $request->name;
        $Tax->price = $request->price;
        $Tax->des = $request->des;
        $Tax->updated_at = Carbon::now();
        $Tax->updated_by = Auth::user()->id;
        $Tax->save();
        $request->session()->flash('suc_msg',$Tax->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.tax.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tax $Tax)
    {
        //
    }
}
