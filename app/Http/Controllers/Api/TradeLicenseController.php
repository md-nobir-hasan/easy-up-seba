<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTradeLicenseRequest;
use App\Http\Requests\UpdateTradeLicenseRequest;
use App\Http\Resources\TradeLicenseResource;
use App\Models\Division;
use App\Models\TradeLicense;
use Illuminate\Support\Facades\DB;

class TradeLicenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'message' => 'Trade license created successfully.',
            'trade_licenses' => TradeLicenseResource::collection(TradeLicense::with('addresses.village', 'addresses.union', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital')->orderByDesc('id')->get())
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return response()->json([
            'Division' => Division::with(['districts', 'districts.upazilas',  'districts.upazilas.unions',  'districts.upazilas.unions.villages', ])->get(),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTradeLicenseRequest $request)
    {
        try {
            DB::beginTransaction();
            $tradeLicenses = TradeLicense::create($request->all());

            $tradeLicenses->addresses()->createMany([
                $request->present_address,
                $request->permanent_address,
                $request->business_address,
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Trade license created successfully.',
                'trade_license' => $tradeLicenses
            ], 201);

        } catch (\Exception $e) {
            DB::rollback();

            return response()->json([
                'message' => 'Trade license creation failed.',
                'error' => $e->getMessage()
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(TradeLicense $tradeLicense)
    {
        return response()->json([
            'message' => 'Trade license retrieved successfully.',
            'trade_license' => new TradeLicenseResource($tradeLicense->load('addresses.village', 'addresses.union', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital'))
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TradeLicense $tradeLicense)
    {

        return response()->json([
            'message' => 'Trade license retrieved successfully.',
            'trade_license' => $tradeLicense->load('addresses.village', 'addresses.union', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital'),
            'Division' => Division::with(['districts', 'districts.upazilas',  'districts.upazilas.unions',  'districts.upazilas.unions.villages', ])->get(),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(UpdateTradeLicenseRequest $request, TradeLicense $tradeLicense)
    {
        try {
            DB::beginTransaction();

            $tradeLicense->update($request->all());

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

            return response()->json([
                'message' => 'Trade license updated successfully.',
                'trade_license' => $tradeLicense->load('addresses.village', 'addresses.union', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital')
            ], 200);
        } catch (\Exception $e) {
            DB::rollback();

            return response()->json([
                'message' => 'Trade license update failed.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TradeLicense $tradeLicense)
    {
        $tradeLicense->delete();

        return response()->json([
            'message' => 'Trade license deleted successfully.',
            'trade_license' => $tradeLicense
        ], 201);

    }
}
