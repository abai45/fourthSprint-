let userInfo = {};
function regFunc() {
    userInfo.mail = document.querySelector('#mail').value;
    userInfo.pass = document.querySelector('#pass').value;
    userInfo.fullName = document.querySelector('#fullName').value;
    userInfo.country = document.querySelector('#country').value;
    userInfo.date = document.querySelector('#date').value;

    let mainInfo = [
        {mail: 'abai.45.abai@gmail.com', pass: 'qq1234', fullName: 'Abai Aman', country: 'Kazakhstan', date: '2002-01-12'},
        {mail: 'alexanderlaimon@gmail.com', pass: 'asdf1234', fullName: 'Alexander', country: 'Russia', date: '2002-01-12'},
        {mail: 'rusline@mail.com', pass: 'dimash123', fullName: 'Ruslan Senky', country: 'Belorussia', date: '2002-01-12'},
    ]

    mainInfo.push(userInfo);
    console.log(mainInfo);

    localStorage.mainStorage = JSON.stringify(mainInfo);

    alert('Вы зарегистрировались!');
    window.location.href = './pages/login.html';
}

function loginFunc() {
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#pass').value;
    let text = document.querySelector('.text');

    let usersDataJSON = localStorage.getItem('mainStorage');
    let usersDataObj = JSON.parse(usersDataJSON);

    let currentUser;

    for (let i = 0; i < usersDataObj.length; i++) {
        if (usersDataObj[i].mail == email && usersDataObj[i].pass == password) {
            alert('Вы авторизовались');
            currentUser = usersDataObj[i];
            break;
        } else {
            text.innerHTML = `Вы ввели неправильные данные!`;
        }
    }

    if (currentUser) {
        const queryParams = `userFullName=${encodeURIComponent(currentUser.fullName)}&userEmail=${encodeURIComponent(currentUser.mail)}&userCountry=${encodeURIComponent(currentUser.country)}&userBirth=${encodeURIComponent(currentUser.date)}`;
        window.location.href = `./profile.html?${queryParams}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userFullName = urlParams.get('userFullName');
    document.querySelector('.userFullName').innerHTML = userFullName;
    document.querySelector('#userName').innerHTML = userFullName;
    document.querySelector('.welcome').innerHTML = `Welcome ${userFullName}!`;
    const userEmail = urlParams.get('userEmail');
    document.querySelector('.userEmail').innerHTML = userEmail;
    const userCountry = urlParams.get('userCountry');
    document.querySelector('.userCountry').innerHTML = userCountry;
    const userBirth = urlParams.get('userBirth');
    document.querySelector('.userBirth').innerHTML = userBirth;
});
