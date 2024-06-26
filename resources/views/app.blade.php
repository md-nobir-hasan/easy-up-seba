<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'ইজি উপি সেবা') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />


        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        <style>
            body{
                background-color: #22eeaf3d;
                font-size: 18px !important;
            }

            /* site's background color handling  */
            .bg1{
                background-color: rgb(14 221 162 / var(--tw-bg-opacity));
            }
            .bg2{
                background-color: #11ff5999;
            }
            .bg3{
                background-color: white;
            }
            .bg4{
                background-color: white;
            }

            /* site's font color handling  */
            .text-color1{
                color: black;
            }
            .text-color2{
                color: white;
            }
            .text-color3{
                color: blue;
            }
            .text-color4{
                color: green;
            }

            /* Site's font handling  */
            .font-size1{
                font-size: 18px;
            }
            .font-size2{
                font-size: 20px;
            }
            .font-size3{
                font-size: 22px;
            }
            .font-size4{
                font-size: 24px;
            }
            .font-size5{
                font-size: 26px;
            }
            .font-size6{
                font-size: 28px;
            }
        </style>
        {{-- <link href="https://printjs-4de6.kxcdn.com/print.min.css" rel="stylesheet"/> --}}

        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        @inertia
        {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> --}}
        {{-- <script src="https://printjs-4de6.kxcdn.com/print.min.js"></script> --}}
        <script src="{{asset('libraries/excel/excel.js')}}"></script>

    </body>
</html>
