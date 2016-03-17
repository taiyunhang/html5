// JavaScript Document
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount; //当前剩余秒数
var code = ""; //验证码
var codeLength = 6; //验证码长度
function sendMessage() {
    curCount = count;
    //产生验证码
    for (var i = 0; i < codeLength; i++) {
        code += parseInt(Math.random() * 10).toString();
    }
    //设置button效果，开始计时
    $("#sendCode").attr("disabled", "true");
    $("#sendCode").val(curCount + "秒后重新发送");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
}

function sendCode() {
    //向后台发送处理数据
    var card = $("#card").val();
    $.ajax({
        type: "POST", //用POST方式传输
        contentType: "application/x-www-form-urlencoded",
        dataType: "json", //数据格式:JSON
        url: url + "sendCode", //目标地址
        data: {
            card: card
        },
        success: function(json) {
            if (json.resultCode == "USER_IS_NULL") {
              );
            } else {
                $("#code").focus();
                sendMessage();
            };
        }  $.MsgBox.Alert("该卡号不存在");
                $("#sendCode").removeAttr("disabled");
                $("#mb_btn_ok1").click(function(){
                    $("#card").focus();
                }
    });
}
//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj); //停止计时器
        $("#sendCode").removeAttr("disabled"); //启用按钮
        $("#sendCode").val("获取验证码");
        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
    } else {
        curCount--;
        $("#sendCode").val(curCount + "秒后重新发送");
    }
}
