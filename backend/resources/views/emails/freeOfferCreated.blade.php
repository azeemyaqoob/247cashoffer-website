<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Submission on 247CashOffer.com</title>
</head>
<body>
    <p>Hi Ron,</p>
    <p>There's a new submission on 247CashOffer</p>

    <ul>

        <li><strong>First Name:</strong> {{ $freeOffer->first_name }}</li>
        <li><strong>Last Name:</strong> {{ $freeOffer->last_name }}</li>
        <li><strong>Email:</strong> {{ $freeOffer->email }}</li>
        <li><strong>Phone:</strong> {{ $freeOffer->phone }}</li>
        <li><strong>Property Address:</strong> {{ $freeOffer->full_address }}</li>
        <li><strong>Contact Time:</strong> {{ $freeOffer->best_time_to_contact ?? 'N/A' }}</li>
        <li><strong>Reference:</strong> {{ $freeOffer->hear_about_us ?? 'N/A' }}</li>
    </ul>

    <p>Thank you!</p>
</body>
</html>
