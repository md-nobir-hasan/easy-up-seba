<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum AddressType: string
{
    use EnumToArray;

    case PERMANENT = 'Permanent';
    case PRESENT = 'Present';
    case BUSINESS = 'Business';
 
}
