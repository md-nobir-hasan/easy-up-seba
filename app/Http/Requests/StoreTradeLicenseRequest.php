<?php

namespace App\Http\Requests;

use App\Enums\AddressType;
use App\Enums\OwnershipType;
use App\Enums\Status;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class StoreTradeLicenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:250|min:2',
            'email' => 'required|email:rfc,dns|max:100|unique:trade_licenses,email',
            'fathers_name' => 'required|string|max:250|min:2',
            'mothers_name' => 'required|string|max:250|min:2',
            'phone' => 'required|string|max:100|min:2',
            'nationality' => 'required|string|max:100|min:2',
            'nid_number' => 'required|string|max:100|min:2',
            'fee' => 'nullable|string|max:250|min:2',
            'e_fee' => 'nullable|string|max:250|min:2',
            'business_name' => 'required|string|max:250|min:2',
            'business_type_id' => 'required',
            'business_capital_id' => 'required',
            'business_starting_date' => 'nullable|string|max:250|min:2',
            'business_space_rant' => 'nullable|string|max:250|min:2',
            'size_of_signboard' => 'nullable|string|max:250|min:2',
            'ownership' => ['required', new Enum(OwnershipType::class)],
            'status' => ['required', new Enum(Status::class)],
            'present_address' => 'required|array',
            'permanent_address' => 'required|array',
            'business_address' => 'required|array',
            'present_address.title' => ['required', 'string', new Enum(AddressType::class)],
            'permanent_address.title' => ['required', 'string', new Enum(AddressType::class)],
            'business_address.title' => ['required', 'string', new Enum(AddressType::class)],
            'present_address.village_id' => ['required', Rule::exists('villages', 'id')],
            'permanent_address.village_id' => ['required', Rule::exists('villages', 'id')],
            'business_address.village_id' => ['required', Rule::exists('villages', 'id')],
            'present_address.union_id' => ['required', Rule::exists('unions', 'id')],
            'permanent_address.union_id' => ['required', Rule::exists('unions', 'id')],
            'business_address.union_id' => ['required', Rule::exists('unions', 'id')],
            'present_address.upazila_id' => ['required', Rule::exists('upazilas', 'id')],
            'permanent_address.upazila_id' => ['required', Rule::exists('upazilas', 'id')],
            'business_address.upazila_id' => ['required', Rule::exists('upazilas', 'id')],
            'present_address.district_id' => ['required', Rule::exists('districts', 'id')],
            'permanent_address.district_id' => ['required', Rule::exists('districts', 'id')],
            'business_address.district_id' => ['required', Rule::exists('districts', 'id')],
            'present_address.division_id' => ['required', Rule::exists('divisions', 'id')],
            'permanent_address.division_id' => ['required', Rule::exists('divisions', 'id')],
            'business_address.division_id' => ['required', Rule::exists('divisions', 'id')],
            'present_address.country' => 'nullable|string|max:100|min:2',
            'permanent_address.country' => 'nullable|string|max:100|min:2',
            'business_address.country' => 'nullable|string|max:100|min:2',
            'present_address.postal_code' => 'nullable|string|max:100|min:2',
            'permanent_address.postal_code' => 'nullable|string|max:100|min:2',
            'business_address.postal_code' => 'nullable|string|max:100|min:2',
            'present_address.ward_number' => 'nullable|string|max:255|min:1',
            'permanent_address.ward_number' => 'nullable|string|max:255|min:1',
            'business_address.ward_number' => 'nullable|string|max:255|min:1',
        ];
    }
}
