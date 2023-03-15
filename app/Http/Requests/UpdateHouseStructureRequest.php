<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHouseStructureRequest extends FormRequest
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
        $this->house_structure ? $id = $this->house_structure->id.',id' : $id  = '' ;
        return [
            'name' => "required|string|max:255|unique:house_structures,name,$id",
            'des' => 'nullable|string',
            'price' => 'required|integer',
        ];
    }
}
