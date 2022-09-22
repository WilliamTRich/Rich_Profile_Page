function changeProfile(element) {
    let parent = element.parentElement.parentElement.querySelector(".large");
    return parent.textContent = "Bob Burnam";
}

function removeElement (element) {
    return element.parentElement.parentElement.remove();
}