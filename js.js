// js.js

function saveToDraft() {
    // Получить значения ввода
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var country = document.querySelector("select").value;
    var phone = document.getElementById("phone").value;

    // Создать объект для хранения данных
    var draftData = {
        name: name,
        surname: surname,
        country: country,
        phone: phone
    };

    // Преобразовать объект в строку JSON и сохранить его в localStorage
    localStorage.setItem("draftData", JSON.stringify(draftData));
}

function loadDraftData() {
    // Загрузить данные из localStorage
    var savedDraft = localStorage.getItem("draftData");

    // Проверить, есть ли сохраненные данные
    if (savedDraft) {
        // Распарсить JSON-строку и установить значения в форме
        var draftData = JSON.parse(savedDraft);
        document.getElementById("name").value = draftData.name;
        document.getElementById("surname").value = draftData.surname;
        document.querySelector("select").value = draftData.country;
        document.getElementById("phone").value = draftData.phone;
    }
}
