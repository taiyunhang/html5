  (function() {
      $.MsgBox = {
          Alert: function(msg) {
              GenerateHtml("alert", msg);
              btnOk(); //alert只是弹出消息，因此没必要用到回调函数callback
              btnNo();
          },
          Confirm: function(msg, callback) {
              GenerateHtml("confirm", msg);
              btnOk(callback);
              btnNo();
          }
      }

      //Html
      var GenerateHtml = function(type, msg) {

          var _html = "";
          _html += '<div id="mb_box"></div><div id="mb_con">';
          _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';

          if (type == "alert") {
              _html += '<div id="mb_btn_ok1">确 &nbsp;定</div>';
          }
          if (type == "confirm") {
              _html += '<div id="mb_btn_ok2">确 &nbsp;定</div>';
              _html += '<div id="mb_btn_no">取 &nbsp;消</div>';
              _html += '<div class="clearfix"></div>';
          }
          _html += '</div></div>';

          $("body").append(_html);
          GenerateCss();
      }

      //Css
      var GenerateCss = function() {

              $("#mb_box").css({
                  width: '100%',
                  height: '100%',
                  zIndex: '99999',
                  position: 'fixed',
                  filter: 'Alpha(opacity=60)',
                  backgroundColor: 'black',
                  top: '0',
                  left: '0',
                  opacity: '0.6'
              });

              $("#mb_con").css({
                  zIndex: '999999',
                  width: '241px',
                  height: '122px',
                  position: 'fixed',
                  backgroundColor: '#f7f7f7',
                  borderRadius: '15px'
              });

              $("#mb_msg").css({
                  padding: '30px 0px',
                  lineHeight: '20px',
                  textAlign: 'center',
                  letterSpacing: '2px',
                  fontFamily: '"微软雅黑"',
                  borderBottom: '1px solid #c0c0c8',
                  fontSize: '16px',
                  color: '#3a3a48'
              });

              $("#mb_btnbox").css({
                  lineHeight: '41px',
                  textAlign: 'center'
              });
              $("#mb_btn_ok1,#mb_btn_no").css({
                  color: '#1fbad6'
              });
              $(".clearfix").css({
                  clear: 'both'
              });
              $("#mb_btn_ok2").css({
                  color: '#1fbad6',
                  float: 'left',
                  width: '120px',
                  borderRight: '1px solid #c0c0c8'
              });
              $("#mb_btn_no").css({
                  color: '#1fbad6',
                  float: 'right',
                  width: '120px'
              });

              var _width = document.documentElement.clientWidth; //屏幕宽
              var _height = document.documentElement.clientHeight; //屏幕高
              var boxWidth = $("#mb_con").width();
              var boxHeight = $("#mb_con").height();
              //让提示框居中
              $("#mb_con").css({
                  top: (_height - boxHeight) / 2 + "px",
                  left: (_width - boxWidth) / 2 + "px"
              });
          }
          //确定按钮事件
      var btnOk = function(callback) {
          $("#mb_btn_ok1,#mb_btn_ok2").click(function() {
              $("#mb_box,#mb_con").remove();
              if (typeof(callback) == 'function') {
                  callback();
              }
          });
      }

      //取消按钮事件
      var btnNo = function() {
          $("#mb_btn_no,#mb_ico").click(function() {
              $("#mb_box,#mb_con").remove();
          });
      }
  })();
