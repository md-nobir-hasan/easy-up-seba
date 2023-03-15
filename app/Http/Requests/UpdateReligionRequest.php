<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateReligionRequest extends FormRequest
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
        $this->religion ? $id = $this->religion->id.',id' : $id  = '' ;
        return [
            'name' => "required|string|max:255|unique:religions,name,$id",
            'des' => 'nullable|string',
        ];
    }
}
