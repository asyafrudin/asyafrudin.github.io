// Elements
const tabelPeserta = document.querySelector("#attendees");
const formPendaftaran = document.querySelector("#form-pendaftaran");

// Event Listeners
tabelPeserta.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('icon-delete')){
        delAttendee(e);
    }
});

// Form submitted
formPendaftaran.addEventListener("submit", function(e) {
    // Grab the objects
    let name = document.querySelector("#fullname");
    let email = document.querySelector("#email");
    let handphone = document.querySelector("#handphone");
    let tabelPesertaBody = document.querySelector("#attendees tbody");

    // Create new row 
    var row = tabelPesertaBody.insertRow();

    // Create new cells
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Add data to the new cells:
    cell1.innerHTML = name.value;
    cell2.innerHTML = email.value;
    cell3.innerHTML = handphone.value;
    cell4.innerHTML = '<a href="#"><i class="fa fa-trash-alt icon-delete"></i></a>';

    formPendaftaran.reset();

    e.preventDefault();
});

// Delete Attendee
function delAttendee(e) {
    // Get name
    let name = e.target.parentElement.parentElement.parentElement.firstElementChild.innerHTML;

    // Confirm delete
    if (confirm(`Delete ${name}?`)) {
        // Delete rows
        e.target.parentElement.parentElement.parentElement.remove();
    }

    e.preventDefault();
}