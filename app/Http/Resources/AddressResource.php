<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class AddressResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            "title"=> $this->title,
            "village"=> $this->whenLoaded('village', function () {
                return $this->village->name;
            }),
            "union"=> $this->whenLoaded('union', function () {
                return $this->union->name;
            }),
            "postal_code"=> $this->postal_code,

            "ward"=> $this->whenLoaded('ward', function () {
                return $this->ward->name;
            }),
            "bazar"=> $this->whenLoaded('bazar', function () {
                return $this->bazar->name;
            }),
            "upazila"=> $this->whenLoaded('upazila', function () {
                return $this->upazila->name;
            }),
            "district"=> $this->whenLoaded('district', function () {
                return $this->district->name;
            }),
            "division"=> $this->whenLoaded('division', function () {
                return $this->division->name;
            }),
            "country"=> $this->country,
            'created_at' => Carbon::parse($this->created_at)->diffForHumans(),
        ];
    }
}
