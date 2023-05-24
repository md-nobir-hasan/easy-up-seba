<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PointHistory extends Model
{
    use HasFactory;

    protected $fillable=['name','user_id','spent_points'];

    public function user(){
       return $this->belongsTo(User::class,'user_id');
    }
}
