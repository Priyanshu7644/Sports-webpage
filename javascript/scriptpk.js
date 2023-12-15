function showConfirmation(event) {

    var confirmation = window.confirm("Are you sure you want to view the scorecard?");
    
    if (confirmation) {
        // User clicked OK
        alert("Opening scorecard...");
    } 

    else {
        //use clicked cancel
        alert('closing window')
        event.preventDefault();
    }
}

