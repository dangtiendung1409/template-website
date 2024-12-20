$(function () {
        $(" .title").click(function () {
                $(this).toggleClass("active");
                $(this).parent().find(".content").slideToggle();
                $(".select").parent().find(".card").slideToggle();
                $(".select").parent().find(".transfer").slideToggle();
        });
        $(" .content .text ul li").click(function () {
                $(".content .card").addClass("active");
        });

        $("  .radio_2").click(function right() {
                $(".payment .select .card").addClass("active");
                $(".payment .select .transfer").removeClass("active");
        });
        $(" .radio_1").click(function left() {
                $(".payment .select .transfer").addClass("active");
                $(".payment .select .card").removeClass("active");
        });
        $(" .payment .select .card ul li").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
        });
});
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
function checkAddress() {
        var address = document.getElementById("txt_address");
        var check_error_address = document.getElementById("error_address");

        if (address.value == "") {
                check_error_address.innerHTML = "Địa chỉ không được để trống";
        } else {
                check_error_address.innerHTML = "";
                return address;
        }
}
function checkEmail() {
        var email = document.getElementById("txt_email");
        var check_error_email = document.getElementById("error_email");

        if (email.value == "") {
                check_error_email.innerHTML = "Email không được để trống";
        } else {
                check_error_email.innerHTML = "";
                return email;
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
function checkMakeup() {
        var address_makeup = document.getElementById("txt_address_makeup");
        var check_error_address_makeup = document.getElementById("error_address_makeup");

        if (address_makeup.value == "") {
                check_error_address_makeup.innerHTML = "Địa điểm không được để trống";
        } else {
                check_error_address_makeup.innerHTML = "";
                return note;
        }
}
function checkDate() {
        var date = document.getElementById("txt_date");
        var check_error_date = document.getElementById("error_date");

        if (date.value == "") {
                check_error_date.innerHTML = "Ngày không được để trống";
        } else {
                check_error_date.innerHTML = "";
                return note;
        }
}
function checkTime() {
        var time = document.getElementById("txt_time");
        var check_error_time = document.getElementById("error_time");

        if (time.value == "") {
                check_error_time.innerHTML = "Ngày không được để trống";
        } else {
                check_error_time.innerHTML = "";
                return note;
        }
}
function send() {
        if (checkName() && checkPhone() && checkNote() && checkAddress() && checkEmail() && checkMakeup() && checkDate() && checkTime()) {
                alert("Cảm ơn bạn đã đăng ký dịch vụ của chúng tôi");
        } else {
                alert("Vui lòng kiểm tra dữ liệu");
        }
}
$(".trademark .slide-inner").slick({
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
});
