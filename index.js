const filterInput = document.getElementById("filterInput");
const ul = document.getElementById("names");
const li = document.querySelectorAll("li.collection-item");

filterInput.addEventListener("input", filterNames);

function filterNames(e) {
  let filterValue = e.target.value.toUpperCase();

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
