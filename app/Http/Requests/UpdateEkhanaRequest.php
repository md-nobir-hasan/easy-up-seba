<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateEkhanaRequest extends FormRequest
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
        $this->ekhana ? $id = $this->ekhana->id.',id' : $id  = '' ;
        return [
            'word_id' => 'required|numeric|exists:words,id',
            'village_id' => 'required|numeric|exists:villages,id',
            'yearly_income' => 'required|numeric',
            'bn_name' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'ed_quali_id' => 'required|numeric|exists:education_qualifications,id',
            'phone' => 'required|string|digits:11|unique:ekhanas,phone,'.$id,
            'holding_no' => 'required|unique:ekhanas,holding_no,'.$id,
            'spouse_name' => 'required|string|max:255',
            'mother_name' => 'required|string|max:255',
            'm_male' => 'nullable|numeric',
            'm_female' => 'nullable|numeric',
            'm_child' => 'nullable|numeric',
            'dob' => 'required|date',
            'birth_no' => 'required|string|max:255|unique:ekhanas,birth_no,'.$id,
            'nid' => 'required|string|max:255|unique:ekhanas,nid,'.$id,
            'gender' => 'required|string|max:255',
            'religion_id' => 'required|numeric|exists:religions,id',
            'profession_id' => 'required|numeric|exists:professions,id',
            'tuboil' => 'required|numeric',
            'toilet_type' => 'required|string|max:255',
            'sc_past' => 'nullable|string|max:255',
            'sc_present' => 'nullable|string|max:255',
            'sc_future' => 'nullable|string|max:255',
            'yearly_house_rent' => 'required|numeric',
            'rent_type' => 'required|string|max:255',
            'land_house' => 'required|numeric',
            'land_cultivate' => 'required|numeric',
            'infrastructure' => 'required|string|max:255',
            'house_struc_id.*' => 'required|numeric',
        ];
    }

    public function messages(): array
    {
        return [
            'word_id.required' => "ওয়ার্ড নির্বাচন করুন",
            'village_id.required' => 'গ্রাম নির্বাচন করুন',
            'yearly_income.required' => 'বাৎসরিক গড় আয় লিখুন',
            'bn_name.required' => 'নাম লিখুন (বাংলা)',
            'name.required' => 'নাম লিখুন (ইংরেজি)',
            'ed_quali_id.required' => 'শিক্ষাগত যোগ্যতা নির্বাচন করুন',
            'phone.required' => "ফোন নাম্বার লিখুন",
            'spouse_name.required' => 'স্বামী/পিতার নাম লিখুন',
            'mother_name.required' => 'মাতার নাম লিখুন',
            'm_male.required' => 'পুরুষ সদ্যস সংখ্যা লিখুন',
            'm_female.required' => 'মহিলা সদ্যস সংখ্যা লিখুন',
            'm_child.required' => 'শিশু সদ্যস সংখ্যা লিখুন',
            'dob.required' => 'জন্ম তারিখ লিখুন',
            'birth_no.required' => 'জন্ম নিবন্ধন লিখুন',
            'nid.required' => 'এনআইডি নাম্বার লিখুন',
            'gender.required' => 'খানা প্রধানের লিঙ্গ নির্বাচন করুন',
            'religion_id.required' => 'খানা প্রধানের ধর্ম নির্বাচন করুন',
            'profession_id.required' => 'পেশা নির্বাচন করুন',
            'tuboil.required' => "নলকুপ নির্বাচন করুন",
            'toilet_type.required' => 'পায়খানার ধরণ নির্বাচন করুন',
            'yearly_house_rent.required' => 'বাৎসরিক ভাড়া লিখুন',
            'rent_type.required' => 'বসবাসের ধরণ নির্বাচন করুন',
            'land_house.required' => 'ভিটা জমির পরিমাণ লিখুন',
            'land_cultivate.required' => 'আবাদী জমির পরিমাণ লিখুন',
            'infrastructure.required' => 'অবকাঠামোর ধরণ নির্বাচন করুন',
            'house_struc_id.*.required' => 'অবকাঠামো নির্বাচন করুন',
        ];
    }
}
