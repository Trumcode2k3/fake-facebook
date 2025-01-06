const mybutton = document.querySelector(`button`);
const username = document.getElementById(`floatingInput`);
const password = document.getElementById(`floatingPassword`);
mybutton.onclick = function () {
  const announce = document.createElement(`p`);

  if (
    username.value === `gianghodatviet1000@gmail.com` &&
    password.value === `chosua123`
  ) {
    announce.textContent = `dang nhap thanh cong`;
    document.body.prepend(announce);
  } else {
    announce.textContent = `ban da dang nhap sai ten dang nhap va mat khau`;
    document.body.prepend(announce);
  }
};
