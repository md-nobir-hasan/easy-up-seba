<?php

namespace App\Http\Controllers;

use App\Models\Profession;
use App\Http\Requests\StoreProfessionRequest;
use App\Http\Requests\UpdateProfessionRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = Profession::with(['createdBy','updatedBy'])->where('deleted_by',null)->orderBy('id','desc')->get();
        return Inertia::render('Setup/Profession/Index',$n);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Setup/Profession/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfessionRequest $request)
    {
        $insert = new Profession();
        $insert->name = $request->name;
        $insert->des = $request->des;
        $insert->created_by = Auth::user()->id;
        $insert->save();
        $request->session()->flash('suc_msg',$request->name.' সফলভাবে সরক্ষণ করা হয়েছে');
        if($request->submit_btn == 'return'){
            return redirect()->route('admin.setup.profession.index');
        }else{
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Profession $Profession)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Profession $Profession)
    {
        $n['mdata'] = $Profession;
        return Inertia::render('Setup/Profession/Edit',$n);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfessionRequest $request, Profession $Profession)
    {
        $Profession->name = $request->name;
        $Profession->des = $request->des;
        $Profession->updated_at = Carbon::now();
        $Profession->updated_by = Auth::user()->id;
        $Profession->save();
        $request->session()->flash('suc_msg',$Profession->name.' সফলভাবে আপডেট করা হয়েছে');
        return redirect()->route('admin.setup.profession.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profession $Profession)
    {
        //
    }
}
