<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTradeLicenseRequest;
use App\Http\Requests\UpdateTradeLicenseRequest;
use App\Http\Resources\TradeLicenseResource;
use App\Models\District;
use App\Models\TradeLicense;
use App\Models\Union;
use App\Models\Upazila;
use App\Models\Village;
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
            'trade_licenses' => TradeLicenseResource::collection(TradeLicense::with('addresses.village', 'addresses.union', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital')->get())
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $villages = Village::all();
        $unions = Union::all();
        $upazilas = Upazila::all();
        $districts = District::all();

        dd($villages);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTradeLicenseRequest $request)
    {
        try {
            DB::beginTransaction();
            $tradeLicenses = TradeLicense::create($request->only(
                'name',
                'fathers_name',
                'mothers_name',
                'email',
                'phone',
                'nationality',
                'nid_number',
                'fee',
                'e_fee',
                'business_name',
                'business_type_id',
                'business_capital_id',
                'business_starting_date',
                'ownership',
                'business_space_rant',
                'status',
                'code_number'
            ));

            $tradeLicenses->addresses()->create($request->only(
                'title',
                'village_id',
                'union_id',
                'postal_code',
                'ward_number',
                'upazila_id',
                'district_id',
                'division_id',
                'country'
            ));

            DB::commit();

            return response()->json([
                'message' => 'Trade license created successfully.',
                'trade_license' => $tradeLicenses->load('addresses.village', 'addresses.union', 'addresses.upazila', 'addresses.district', 'businessType', 'businessCapital')
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
            'villages' => Village::all(),
            'unions' => Union::all(),
            'upazilas' => Upazila::all(),
            'districts' => District::all(),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(UpdateTradeLicenseRequest $request, TradeLicense $tradeLicense)
    {
        try {
            DB::beginTransaction();

            $tradeLicense->update($request->only([
                'name',
                'fathers_name',
                'mothers_name',
                'email',
                'phone',
                'nationality',
                'nid_number',
                'fee',
                'e_fee',
                'business_name',
                'business_type_id',
                'business_capital_id',
                'business_starting_date',
                'ownership',
                'business_space_rant',
                'status',
                'code_number'
            ]));

            $tradeLicense->address()->update($request->only([
                'title',
                'village_id',
                'union_id',
                'postal_code',
                'ward_number',
                'upazila_id',
                'district_id',
                'division_id',
                'trade_license_id',
                'country'
            ]));

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
        return $tradeLicense->delete();

    }
}
