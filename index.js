function CheckIsNumber(val){
    return !isNaN(val) && typeof parseFloat(val) === 'number' 
}

function CheckValid(){
    const msg = document.getElementById("msg");

    const n1 = document.getElementById("number-first").value;
    const n2 = document.getElementById("number-second").value;

    if(n1.trim() == "" || n2.trim() == ""){
        msg.innerText = "Vui lòng nhập đủ hai số"
        return false;
    }

    if(!CheckIsNumber(n1) && !CheckIsNumber(n2)){
        msg.innerText = "Hai số nhập vào không hợp lệ"
        return false;
    }
    if(!CheckIsNumber(n1)){
        msg.innerText = "Số thứ nhất không hợp lệ"
        return false;
    }
    if(!CheckIsNumber(n2)){
        msg.innerText = "Số thứ hai không hợp lệ"
        return false;
    }

    msg.innerText = "";
    return true;
}

function Calculate(){
    if(!CheckValid()) return;
    const n1 = parseFloat(document.getElementById("number-first").value);
    const n2 = parseFloat(document.getElementById("number-second").value);
    const res = document.getElementById("result");
    const operator = document.querySelector('input[name="math"]:checked').value;
    const msg = document.getElementById("msg");
    var result = 0;
    res.value = ""

    switch (operator) {
        case 'add':
            result = n1 + n2;
            break;
        case 'sub':
            result = n1 - n2;
            break;
        case 'mult':
            result = n1 * n2;
            break;
        case 'div':
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                msg.innerText = "Không thể chia cho 0"
                return;
            }
            break;
        default:
            result = 'Lỗi phép tính';
    }
    res.value = result
    console.log(operator);

}

document.getElementById("number-first").addEventListener("blur",CheckValid);
document.getElementById("number-second").addEventListener("blur",CheckValid);
document.getElementById('calculate-button').addEventListener('click', Calculate);