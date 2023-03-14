<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
        $this->user ? $id = $this->user->id.',id' : $id  = '' ;
        return [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255|unique:users,phone,'.$id,
            'email' => 'required|string|max:255|unique:users,phone,'.$id,
            'address' => 'nullable|string|max:255',
            'password' => 'required|string|max:255',
            'role_id' => 'required|integer|max:255|exists:roles,id',
        ];
    }
}
