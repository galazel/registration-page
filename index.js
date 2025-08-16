function submitForm(e) {
  e.preventDefault();
  const firstName = document.getElementById('first-name-input').value.trim();
  const lastName = document.getElementById('last-name-input').value.trim();
  const password = document.getElementById('password-input').value;
  const confirmPassword = document.getElementById('confirm-password-input').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const hobby = document.getElementById('hobby-input').value.trim();
  const incomeSource = document.getElementById('income-select').value;
  const income = document.getElementById('income-input').value.trim();
  const email = document.getElementById('email-input').value.trim();
  const age = document.getElementById('age-input').value;
  const bio = document.getElementById('bio').value.trim();
  const profileFile = document.getElementById('profile').files[0];

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  alert('Registered Successfully!')
  console.log({firstName,lastName,password,confirmPassword,gender,hobby,incomeSource,income,email,age,bio,profileFile})
  e.target.reset()
}
