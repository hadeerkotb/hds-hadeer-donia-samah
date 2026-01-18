const profileBtn = document.querySelector(".profile");
const signupForm = document.getElementById("signupForm");

// فتح / قفل الفورم
profileBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  signupForm.style.display =
    signupForm.style.display === "block" ? "none" : "block";
});

// منع القفل عند الضغط داخل الفورم
signupForm.addEventListener("click", function (e) {
  e.stopPropagation();
});

// قفل الفورم عند الضغط برّه
document.addEventListener("click", function () {
  signupForm.style.display = "none";
});
