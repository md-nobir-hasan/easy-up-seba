<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfessionRequest extends FormRequest
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
        $this->profession ? $id = $this->profession->id.',id' : $id  = '' ;
        return [
            'name' => "required|string|max:255|unique:professions,name,$id",
            'des' => 'nullable|string',
        ];
    }
}
