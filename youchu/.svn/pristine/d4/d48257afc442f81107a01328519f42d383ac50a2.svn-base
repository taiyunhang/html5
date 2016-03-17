var data, cmdcPoints;
if (typeof(Storage) !== "undefined") {
    $.ajax({
        type: "post",
        url: url + "map",
        async: false,
        data: {
            city: sessionStorage.city,
            latitude: sessionStorage.latitude,
            longitude: sessionStorage.longitude
        },
        success: function(json) {
            if (json.resultCode == "SUCCESS") {
                //ourpoints[0] = eval("(" + json.cmdcPoints + ")")[0].latitude;
                //ourpoints[1] = eval("(" + json.cmdcPoints + ")")[0].longitude;
                data = json.coEnterprises;
                cmdcPoints = json.cmdcPoints;
            } else if (json.resultCode == "SESSION_TIME_OUT") {
                $.MsgBox.Alert("会话已过期");
                $("#mb_btn_ok1").click(function() {
                    window.location.href = "login.html";
                });
            }
        }
    });
}
var my_icon = "images/my_icon.png";
var map_icon1 = "images/map_icon1.png";
var map_icon2 = "images/map_icon2.png";
// 百度地图API功能
var map = new BMap.Map("l-map");
//map.setCurrentCity("全国");
var myIcon = new BMap.Icon(my_icon, new BMap.Size(15, 15));
var c1Icon = new BMap.Icon(map_icon1, new BMap.Size(68, 109), {
    imageOffset: new BMap.Size(23, 10)
});
var c2Icon = new BMap.Icon(map_icon2, new BMap.Size(68, 109), {
    imageOffset: new BMap.Size(23, 10)
});
var content = sessionStorage.city;
/*if (data[0] != null) {
    content = city;
} else {
    content = sessionStorage.city;
}*/
//Point(经度，wei)
var point = new BMap.Point(sessionStorage.longitude, sessionStorage.latitude);
this.addMarker(point, "您当前位置", "");
map.centerAndZoom(content, 14); // 初始化地图，设置中心点坐标和地图级别
var circle = new BMap.Circle(point, 800, {
    fillColor: "blue",
    strokeWeight: 1,
    fillOpacity: 0.1,
    strokeOpacity: 0.5
});
map.addOverlay(circle);
// 编写自定义函数,创建标注
function addMarker(point, entName, entPhone, address, distance) {
    var marker = null;
    if (entName == "您当前位置") {
        marker = new BMap.Marker(point, {
            icon: myIcon
        });
    } else {
        marker = new BMap.Marker(point, {
            icon: c1Icon
        });
    }
    map.addOverlay(marker);
    var infoWindow = new BMap.InfoWindow(entName + entPhone); // 创建信息窗口对象
    marker.addEventListener("click", function() {
        $(".BMap_Marker").each(function() {
            var img = $(this).find("div").find("img");
            if ($(img).attr("src") == map_icon2) {
                $(img).attr("src", map_icon1);
            }
        });
        if (entName != "您当前位置") {
            this.setIcon(c2Icon);
            //$("#shopInfo").attr("href","activity-list.jhtm?id="+id+"&itemCode="+itemCode);
            $("#netName").text(entName);
            $("#netAddress").text(address + "（" + distance + "km）");
            map.closeInfoWindow();
            $(".address").show();
        } else {
            this.openInfoWindow(infoWindow);
            $(".address").hide();
        }
    });
};
for (var o in data) {
    var point = new BMap.Point(data[o].map.latitude, data[o].map.longitude);
    addMarker(point, data[o].name, "<br/>手机号:" + data[o].telephone, data[o].address, data[o].distance);
}
map.enableScrollWheelZoom();
