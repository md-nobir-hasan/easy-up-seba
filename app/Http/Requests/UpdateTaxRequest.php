<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaxRequest extends FormRequest
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
        $this->tax ? $id = $this->tax->id.',id' : $id  = '' ;
        return [
            'name' => "required|string|max:255|unique:taxes,name,$id",
            'price' => 'required|numeric|max:100|unique:taxes,price',
            'des' => 'nullable|string',
        ];
    }
}
