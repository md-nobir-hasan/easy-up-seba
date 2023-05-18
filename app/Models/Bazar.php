<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bazar extends Model
{
    use HasFactory;
    protected $fillable = ['name','code','union_id'];

    public function union(){
        return $this->belongsTo(Union::class,'union_id');
    }
}
