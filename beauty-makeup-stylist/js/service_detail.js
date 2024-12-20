$(function () {
        $(".detail .service_picture .picture ul li").click(function () {
                $imgSrc = $(this).attr("datasrc");
                $(".detail .img  img").attr("src", $imgSrc);
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $(".add .product .img img").attr("src", $imgSrc);
        });

        $(".typeClick").click(function () {
                $type = $(this).attr("type");
                $quality = $(this).parent().find("input").val();
                if ($type == "plus") {
                        $quality++;
                } else if ($type == "minus" && $quality > 3) {
                        $quality--;
                }
                $(this).parent().find("input").val($quality);
        });

        $(".hair_style ul li ").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $datastyle = $(this).attr("datastyle");
                $(" h4 span").text($datastyle);
                $(" .add .product .content .desc span").text($datastyle);
        });

        $(".detail .trademarks ul li").click(function () {
                $(this).toggleClass("active");
                $(this).siblings().removeClass("active");
                $datalabel = $(this).attr("datalabel");
                $(" h5 span").text($datalabel);
                $(" .add .product .content .labels span").text($datalabel);
        });

        $(".btn").click(function () {
                $(".add").addClass("active");

                setTimeout(() => {
                        $(".add").removeClass("active");
                }, 3000);
        });
});
