function displayDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById('datetime');

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var datetimeString = now.toLocaleDateString('en-US', options);

    datetimeElement.textContent = datetimeString;
}

// Memanggil fungsi displayDateTime setiap detik untuk memperbarui waktu secara real-time
setInterval(displayDateTime, 1209600000);
