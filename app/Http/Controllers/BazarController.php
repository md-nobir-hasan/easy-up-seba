<?php

namespace App\Http\Controllers;

use App\Models\Bazar;
use App\Http\Requests\StoreBazarRequest;
use App\Http\Requests\UpdateBazarRequest;
use App\Models\Union;
use Inertia\Inertia;

class BazarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = Bazar::with(['union'])->orderBy('id','desc')->get();
        return Inertia::render('Setup/Bazar/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $n['unions'] = Union::where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Bazar/Create',$n);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBazarRequest $request)
    {
        Bazar::create($request->all())->only('name','code','union_id');
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.bazar.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Bazar $bazar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bazar $bazar)
    {
        $n['unions'] = Union::orderBy('id','desc')->get();
        $n['bazar'] = Bazar::with(['union'])->find($bazar->id);
        return Inertia::render('Setup/Bazar/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBazarRequest $request, Bazar $bazar)
    {
        $bazar->update($request->all());
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.bazar.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bazar $bazar)
    {
        //
    }
}
