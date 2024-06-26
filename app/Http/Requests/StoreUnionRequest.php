<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUnionRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'division_id' => 'required|integer|max:255|exists:divisions,id',
            'district_id' => 'required|integer|max:255|exists:districts,id',
            'upazila_id' => 'required|integer|max:255|exists:upazilas,id',
        ];
    }
}
