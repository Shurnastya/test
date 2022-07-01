function popup () {
    const popupOpen = document.getElementById('popup-open');
    const popupClose = document.getElementById('popup-close');
    const popup = document.getElementById('popup');

    popupOpen.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('active');
    });

}
popup();

// Маска номер
var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);