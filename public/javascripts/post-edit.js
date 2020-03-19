// find post edit form
let postEditForm = document.getElementById('postEditForm');
// add submit listener to post edit form
postEditForm.addEventListener('submit', function () {
    // find length of upload images
    let imageUploads = document.getElementById('imagesUpload').files.length;
    // find total number of existing images
    let existingImages = document.querySelectorAll('.imageDeleteCheckbox').length;
    // fin total number of potential deletions
    let imagesDeletions = document.querySelectorAll('.imageDeleteCheckbox:checked').length;
    // figure out if form can be submitted or not
    let newTotal = existingImages - imagesDeletions + imageUploads;
    let removalAmt = newTotal - 4;
    if (newTotal > 4) {
        event.preventDefault();
        alert(`You need to remove at least ${removalAmt} (more) image${removalAmt === 1 ? '':'s'}!`)
    }
});