function checkName() {
        var name = document.getElementById("txt_name");
        var check_error_name = document.getElementById("error_name");

        if (name.value == "") {
                check_error_name.innerHTML = "Họ tên không được để trống";
        } else {
                check_error_name.innerHTML = "";
                return name;
        }
}
function checkPhone() {
        var phone = document.getElementById("txt_phone");
        var check_error_phone = document.getElementById("error_phone");

        if (phone.value == "") {
                check_error_phone.innerHTML = "Điện thoại không được để trống";
        } else if (phone.value.length > 11 || phone.value.length < 9) {
                check_error_phone.innerHTML = "Định dạng số điện thoại không đúng";
        } else {
                check_error_phone.innerHTML = "";
                return phone;
        }
}
function checkNote() {
        var note = document.getElementById("txt_note");
        var check_error_note = document.getElementById("error_note");

        if (note.value == "") {
                check_error_note.innerHTML = "Ghi chú không được để trống";
        } else {
                check_error_note.innerHTML = "";
                return note;
        }
}
function send() {
        if (checkName() && checkPhone() && checkNote()) {
                alert("Đã gửi");
        } else {
                alert("Vui lòng kiểm tra dữ liệu");
        }
}

$(function () {
        $(".navbar-icon .icon-search").click(function () {
                $(".navbar .search").toggleClass("active");
        });

        $(".trademark .slide-inner").slick({
                slidesToShow: 3,
                infinite: true,
                arrows: false,
                dots: false,
                autoplay: true,
        });

        $(window).scroll(function () {
                if ($(window).scrollTop() > 50) {
                        $(".navbar").addClass("active");
                } else {
                        $(".navbar").removeClass("active");
                }
        });
});
