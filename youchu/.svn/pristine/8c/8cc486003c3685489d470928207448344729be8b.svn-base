function Ionclick(areaName, poistion, id) {
    var flag = $("#flag").val();
    var lat = poistion.lat;
    var lng = poistion.lng;
    $("#dropdown-menu li").each(function() {
        $(this).css("display", "block");
        if ($(this).attr("id") == id) {
            $(this).css("display", "none");
        }
    });
    /*if (areaName == '全城') {
        $("#allCity").hide();
        lat = sessionStorage.latitude;
        lng = sessionStorage.longitude;
    } else {
        $("#allCity").show();
    }*/
    $(".pointlist").each(function(index, element) {
        $(this).removeClass("undis");
        var area = $(this).attr("areaId");
        if (area != id && areaName != '全城') {
            $(this).toggleClass("undis");
        }
    });
    if (flag) {
        $(".jt").attr("src", "images/icon_small_jt.png");
        flag = false;
    } else {
        $(".jt").attr("src", "images/icon_small_jt2.png");
        flag = true;
    }
    if (areaName == '全城') {
        lat = sessionStorage.latitude;
        lng = sessionStorage.longitude;
    }
    map.panTo(new BMap.Point(lng, lat)); //改变地图中心点
    $("#dropdownMenu1").text(areaName);
    $("#flag").val(flag);
    $(".alllist ul").toggleClass("dis");
    $("#l").toggleClass("fixed");
    //$(".map span").toggleClass("fademap");
}
