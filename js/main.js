let saveBtn = document.getElementById("save-btn");

saveBtn.onclick = function () {
  this.innerHTML = '<div class="loader"></div>';
  setTimeout(() => {
    this.innerHTML = "changes saved";
    this.style = "background:#f1f5f4; color:#333; pointer-events:none;";
  }, 2000);
};
