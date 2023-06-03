<?php

namespace App\Http\Controllers;

use App\Enums\OwnershipType;
use App\Enums\Status;
use App\Http\Requests\StoreTradeLicenseRequest;
use App\Http\Requests\UpdateTradeLicenseRequest;
use App\Http\Resources\TradeLicenseResource;
use App\Models\BusinessType;
use App\Models\Division;
use App\Models\TradeLicense;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TradeLicenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $n['data'] = TradeLicenseResource::collection(TradeLicense::with('addresses.village', 'addresses.union', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital')->orderByDesc('id')->get());
        return Inertia::render('TradeLicense/Index', $n);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $divisions = Division::orderBy('id', 'desc')->get();
        $status = Status::values();
        $ownerShipType = OwnershipType::values();
        $businessType = BusinessType::all();
        return Inertia::render('TradeLicense/Form', ['divisions' => $divisions, 'status'=> $status, 'ownershipType'=> $ownerShipType, 'businessType'=> $businessType]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTradeLicenseRequest $request)
    {
        try {
            DB::beginTransaction();
            if(auth()->user()) {
                $tradeLicenses = TradeLicense::create(array_merge(['created_by'=> auth()->user()->id], $request->all()));
            } else {
                $tradeLicenses = TradeLicense::create($request->all());
            }

            $tradeLicenses->addresses()->createMany([
                $request->present_address,
                $request->permanent_address,
                $request->business_address,
            ]);

            DB::commit();

            $request->session()->flash('suc_msg', $request->name.' সফলভাবে সরক্ষণ করা হয়েছে');

            return redirect()->route('admin.trade-license.index');

        } catch (\Exception $e) {
            DB::rollback();
            $request->session()->flash('suc_msg', $e->getMessage());
            return redirect()->back(400);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(TradeLicense $tradeLicense)
    {
        return Inertia::render('TradeLicense/Show', ['trade_license' => new TradeLicenseResource($tradeLicense->load('addresses.village', 'addresses.union', 'addresses.ward', 'addresses.bazar', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital'))]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TradeLicense $tradeLicense)
    {

        $divisions = Division::orderBy('id', 'desc')->get();
        $status = Status::values();
        $ownerShipType = OwnershipType::values();
        $businessType = BusinessType::all();
        $tradeLicense->load('addresses');

        return Inertia::render('TradeLicense/Form', ['divisions' => $divisions, 'status'=> $status, 'ownershipType'=> $ownerShipType, 'businessType'=> $businessType, 'tradeLicense'=> $tradeLicense]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(UpdateTradeLicenseRequest $request, TradeLicense $tradeLicense)
    {
        try {
            DB::beginTransaction();

            $tradeLicense->update(array_merge(['updated_by'=> auth()->user()->id], $request->all()));

            $tradeLicense->addresses()
                ->where('title', 'Present')
                ->updateOrCreate([], $request->present_address);

            $tradeLicense->addresses()
                ->where('title', 'Permanent')
                ->updateOrCreate([], $request->permanent_address);

            $tradeLicense->addresses()
                ->where('title', 'Business')
                ->updateOrCreate([], $request->business_address);

            DB::commit();

            $request->session()->flash('suc_msg', $request->name.' সফলভাবে আপডেট করা হয়েছে');

            return redirect()->route('admin.trade-license.index');

        } catch (\Exception $e) {
            DB::rollback();
            $request->session()->flash('suc_msg', $e->getMessage());
            return redirect()->back(400);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, TradeLicense $tradeLicense)
    {

        if($tradeLicense->delete()) {
            $tradeLicense->deleted_by = auth()->user()->id;
            $request->session()->flash('suc_msg', ' সফলভাবে ডিলেট হয়েছে');

            return redirect()->back();
        } else {
            $request->session()->flash('suc_msg', 'ডিলেট ব্যার্থ হয়েছে');

            return redirect()->back();
        }

    }

    public function tradeLicense()
    {
        $divisions = Division::orderBy('id', 'desc')->get();
        $status = Status::values();
        $ownerShipType = OwnershipType::values();
        $businessType = BusinessType::all();
        return Inertia::render('TradeLicense/PublicForm', ['divisions' => $divisions, 'status'=> $status, 'ownershipType'=> $ownerShipType, 'businessType'=> $businessType]);
    }

    public function exportPdf(TradeLicense $tradeLicense)
    {

        $tradeLicense = new TradeLicenseResource($tradeLicense->load('addresses.village', 'addresses.union', 'addresses.ward', 'addresses.bazar', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital'));



        $html = '<html><head><style>body { font-family: siyam-rupali; }</style></head><body><p>আমি বাংলায় গান গাই।</p></body></html>';
        $pdf = Pdf::loadHTML($html);
        return $pdf->stream();
    }
}
