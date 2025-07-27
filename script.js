
document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        document.getElementById('result').innerText = "Thanks for voting: " + selected.value;
    } else {
        document.getElementById('result').innerText = "Please select an option first.";
    }
});
