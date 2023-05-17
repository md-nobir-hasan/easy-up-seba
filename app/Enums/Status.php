<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum Status: string
{
    use EnumToArray;
    
    case PENDING = 'Pending'; 
    case ACCEPTED = 'Accepted'; 
    case REJECTED = 'Rejected';
}
