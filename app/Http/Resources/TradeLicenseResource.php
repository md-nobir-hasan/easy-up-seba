<?php

namespace App\Http\Resources;

use App\Enums\AddressType;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class TradeLicenseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $addresses = $this->whenLoaded('addresses');

        return [
            'id' => $this->id,
            "code_number"=> $this->code_number,
            "name"=> $this->name,
            "fathers_name"=> $this->fathers_name,
            "mothers_name"=> $this->mothers_name,
            "email"=> $this->email,
            "phone"=> $this->phone,
            "nationality"=> $this->nationality,
            "nid_number"=> $this->nid_number,
            "fee"=> $this->fee,
            "e_fee"=> $this->e_fee,
            "tin_number"=> $this->tin_number,
            "business_name"=> $this->business_name,
            "business_type"=>$this->whenLoaded('businessType', function () {
                return $this->businessType->name;
            }),
            "quantity"=> $this->quantity,
            'business_capital' => $this->whenLoaded('businessCapital', function () {
                return $this->businessCapital->name;
            }),
            "business_starting_date" => Carbon::parse($this->business_starting_date)->format('d M, Y'),
            "ownership"=> $this->ownership,
            "business_space_rant"=> $this->business_space_rant,
            "size_of_signboard"=> $this->size_of_signboard,
            "status"=> $this->status,
            'created_at' => Carbon::parse($this->created_at)->format('d M, Y h:i A'),
            'present_address' => AddressResource::collection($addresses->where('title', AddressType::PRESENT))->first(),
            'permanent_address' => AddressResource::collection($addresses->where('title', AddressType::PERMANENT))->first(),
            'business_address' => AddressResource::collection($addresses->where('title', AddressType::BUSINESS))->first(),

        ];
    }
}
