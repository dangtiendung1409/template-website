function convertMoney(num, separator) {
        separator = separator === undefined ? "." : separator;
        num = String(num).replace(/[^0-9]/g, "");
        if (!isNaN(num)) {
                var array = num.toString().split("");
                var index = -3;
                while (array.length + index > 0) {
                        array.splice(index, 0, separator);
                        index -= 4;
                }
                return array.join("");
        }
}
function convertNumber(str) {
        return str.replace(/[^0-9]/g, "");
}

$(function () {
        $(".typeClick").click(function () {
                $type = $(this).attr("type");
                $quality = $(this).parent().find("input").val();
                $price = convertNumber($(this).closest(".cart-item").find(".pricecore").text());
                $total = convertNumber($(".sum span").text());
                $sum = convertNumber($(this).closest(".cart-item").find(".price span").text());

                if ($type == "plus") {
                        $quality++;
                } else if ($type == "minus") {
                        if ($quality > 1) {
                                $quality--;
                        }
                } else if ($type == "delete") {
                        $total = $total - $sum;
                        $(this).closest(".cart-item").fadeOut(500);
                        $totalpay = $total;
                }

                if ($type == "plus" || $type == "minus") {
                        $total = $total - $sum;
                        $sum = $price * $quality;
                        $total = $total + $sum;
                        $totalpay = $total;
                }
                $(this).parent().find("input").val($quality);
                $(this).closest(".cart-item").find(".price span").text(convertMoney($sum));
                $(".sum span").text(convertMoney($total));
                $(".sum-pay span").text(convertMoney($totalpay));
        });
});
$(".trademark .slide-inner").slick({
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
});
