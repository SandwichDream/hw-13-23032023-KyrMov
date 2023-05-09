window.onload = ()=>{

    // 1) Створити кнопку, при кліку на яку в локалсторедж записуєтья ширина вікна перегляду користувача, а також іншим ключем висота екрану

    let firstBtn = document.querySelector(".first>button");
    let firstP = document.querySelector(".first>p");

	firstBtn.addEventListener("click", function() {
		localStorage.setItem("width", window.innerWidth);
		localStorage.setItem("height", window.innerHeight);
        firstP.innerHTML = `width/height: ${localStorage.width}:${localStorage.height}`;
	});

    // 2) Створити трай кетч з кастомним обробником помилки. Також додайте в catch  обробку цієї помилки і виведіть alert що помилка оброблена

    let user = "Bob";

    try{
        console.log(letuser);
    }
    catch(e){
        let div = document.querySelector(".second");
        let message = `I don't see "${String(e.message).replace(" is not defined", "")}"`;
        console.log(message);
        alert(message);
        div.innerHTML = message;
    }

    // 3) Отримайте від користувача значення радіуса кола і намалюйте коло за допомгою svg

    let input = document.querySelector(".third>input");
    let circle = document.querySelector(".third circle");

    input.addEventListener("input", () => {
        let radius = input.value;
        if (radius > 0 && radius < 50) {
            circle.setAttribute("r", radius);
        }
        else if(radius <= 0) {
            input.value = 1;
        }
        else {
            input.value = 49;
        }
    });

}
