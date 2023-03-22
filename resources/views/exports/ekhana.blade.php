
<table class="w-full text-md text-left text-gray-500 dark:text-gray-400">
    <thead class="text-md text-center text-gray-700 uppercase bg-[#11ff5999] dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                হোল্ডিং নাম্বার
            </th>
            <th scope="col" class="px-6 py-3">
               করদাতার নাম(বাংলা)
            </th>
            <th scope="col" class="px-6 py-3">
               করদাতার নাম(ইংলিশ)
            </th>
            <th scope="col" class="px-6 py-3">
               বাৎসরিক আয়
            </th>
            <th scope="col" class="px-6 py-3">
               পিতা/স্বামীর নাম
            </th>
            <th scope="col" class="px-6 py-3">
               মাতার নাম
            </th>
            <th scope="col" class="px-6 py-3">
               এনআইডি নাম
            </th>
            <th scope="col" class="px-6 py-3">
                মোবাইল নাম্বার
            </th>
            <th scope="col" class="px-6 py-3">
               গ্রামের নাম
            </th>
            <th scope="col" class="px-6 py-3">
                ওয়ার্ড নং
            </th>
            <th scope="col" class="px-6 py-3">
                পাকা
            </th>
            <th scope="col" class="px-6 py-3">
                আধাপাকা
            </th>
            <th scope="col" class="px-6 py-3">
                কাঁচা
            </th>
            <th scope="col" class="px-6 py-3">
                বাৎসরিক ভাড়ার পরিমাণ
            </th>

            {{-- <th scope="col" class="px-6 py-3">
                তৈরির তারিখ
            </th>
            <th scope="col" class="px-6 py-3">
                তৈরির
            </th> --}}
        </tr>
    </thead>
    <tbody>
        @foreach($data as $val)
        <tr>
            <td>{{ $val->holding_no  }}</td>
            <td>{{ $val->bn_name  }}</td>
            <td>{{ $val->name  }}</td>
            <td>{{ $val->yearly_income  }}</td>
            <td>{{ $val->spouse_name  }}</td>
            <td>{{ $val->mother_name  }}</td>
            <td>{{ $val->nid  }}</td>
            <td>{{ $val->phone  }}</td>
            <td>{{ $val->village ? $val->village->name : ''  }}</td>
            <td>{{ $val->word ? $val->word->name : ''  }}</td>
            <td>{{ $val->paka_house  }}</td>
            <td>{{ $val->adhapaka_house  }}</td>
            <td>{{ $val->kasa_house  }}</td>
            <td>{{ $val->yearly_house_rent  }}</td>
        </tr>

        @endforeach


</tbody>
</table>
