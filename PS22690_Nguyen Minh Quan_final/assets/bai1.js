// bài 1

// hàm cho số ngẫu nhiên từ 1-10
function random(){
    var a = Math.round(Math.random() * 10);
    document.getElementById("a").value = a;
    var b = Math.round(Math.random() * 10);
    document.getElementById("b").value = b;
    var c = Math.round(Math.random() * 10);
    document.getElementById("c").value = c;
}

// hàm mở/tắt button
function lockButton(check){
    document.getElementById("giaiPT").disabled = check;
}

// hiển thị số lần giải
var q = 0;
function dem(){
    q++;
    document.getElementById("soLanGiai").innerHTML = q;
}

// hiển thị thời gian hiện tại
function time(){
    var thoiGian = new Date();
    var ngay = thoiGian.getDate();
    var thang = thoiGian.getMonth()+1;
    var nam = thoiGian.getFullYear();
    var gio = thoiGian.getHours();
    var phut = thoiGian.getMinutes();
    var giay = thoiGian.getSeconds();
    var str = `Bây giờ là ${ngay}/${thang}/${nam} ${gio}:${phut}:${giay}`;
    document.getElementById("time").innerHTML = str;
}
setInterval("time()", 1000); // cứ mỗi 1 giây sẽ chạy lại hàm time() 1 lần

// hàm giải phương trình bậc 2
function giai(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    if(a == 0){
        if(b == 0){
            if(c == 0){
                document.getElementById("ketQua").innerHTML = "Phương trình vô số nghiệm"
            }else{
                document.getElementById("ketQua").innerHTML = "Phương trình vô nghiệm"
            }
        }else{
            var x = -c/b;
            document.getElementById("ketQua").innerHTML = `Phương trình bậc nhất: x = ${x.toFixed(2)}`;
        }
    }else{
        var delta = Math.pow(b,2) - 4 * a * c;
        if(delta < 0){
            document.getElementById("ketQua").innerHTML = "Phương trình vô nghiệm";
        }else if(delta == 0){
            var x = -b / (2*a);
            document.getElementById("ketQua").innerHTML = `Phương trình có nghiệm x = ${x.toFixed(2)}`;
        }else{
            var x1 = (- b + Math.sqrt(delta))/(2*a);
            var x2 = (- b - Math.sqrt(delta))/(2*a);
            document.getElementById("ketQua").innerHTML = ` Phương trình có 2 nghiệm: x1 = ${x1.toFixed(2)} và x2 = ${x2.toFixed(2)}`;
        }
    }
}


// bài 2

// khai báo biến
var images = [];
var index = 0;
var sohinh = 8;

// dùng vòng lặp for để chạy từng tấm ảnh
for (var i = 0; i < sohinh; i++){
    images[i] = new Image();
    images[i].src = "./img/" + i + ".jpg"
}

// hàm hiển thị ảnh kế tiếp
function next(){
    index++;
    if(index >= images.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    document.getElementById("stt").innerHTML = index + 1;
}setInterval(next,2000); // cứ mỗi 2 giây sẽ hiển thị ảnh tiếp theo


// hàm hiển thị ảnh trước đó
function prev(){
    index--;
    if(index < 0) index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}

// bài 3

// hàm đổi ô mức chọn giá
function doimucgia(){
    var arrGia = document.getElementsByName("gia");
    var obj = document.getElementById("mucgia");
    mucdangchon = obj.value;
    for(i=0; i<arrGia.length;i++){
        gia = parseFloat(arrGia[i].innerText);
        if(gia<mucdangchon || mucdangchon==-1){
            arrGia[i].parentNode.style.display="";
        }
        else{
            arrGia[i].parentNode.style.display="none";
        }
    }tongtien();
}

// hàm tích vào 1 checkbox sẽ hiển thị ô số lượng và nếu tắt checkbox sẽ hiển thị số lượng bằng rỗng
function tich1checkbox(i){
    var arrSL = document.getElementsByName("soluong");
    arrSL[i].disabled = !arrSL[i].disabled;
    if(arrSL[i].disabled==true){
        arrSL[i].value=0;
        arrSL[i].parentNode.nextElementSibling.innerText="";
    }
    tongtien();
}

// hàm tính cột thành tiền
function thanhtien(tt){
    var soluong = tt.value;
    var gia = tt.parentNode.previousElementSibling.innerText;
    tt.parentNode.nextElementSibling.innerText= soluong*gia;
    tongtien();
}

// hàm tính ô tổng tiền
function tongtien(){
    tt = 0;
    var arrThanhTien = document.getElementsByName("thanhtien");
    for(i=0;i<arrThanhTien.length;i++){
        if(arrThanhTien[i].parentNode.style.display==""){
            tien = arrThanhTien[i].innerText;
            tt+=Number(tien);
        }
    }
    document.getElementById("tinhtong").innerText=tt;
}