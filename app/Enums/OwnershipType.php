<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum OwnershipType: string
{
    use EnumToArray;

    case SELF = 'Self';
    case RENT = 'Rent';
}
