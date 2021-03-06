var _pri = {
    bindUI: function () {
        $('.js-submit').on('click', function () {
            _pri.util.submitStudent();
        });
    },
    util: {
        submitStudent: function () {
            var btn = $('.js-submit');
            if (btn.hasClass('weui_btn_disabled')) {
                return;
            }
            btn.addClass('weui_btn_disabled');
            
            var username = $('input[name="username"]').val();
            var classid = $('select[name="classid"]').val();
            var wename = $('input[name="wename"]').val();
            var openid = $('input[name="openid"]').val();
            if (!username) {
                alert('请填写姓名');
                btn.removeClass('weui_btn_disabled');
                return;
            }
            if (!classid) {
                alert('请选择班级');
                btn.removeClass('weui_btn_disabled');
                return;
            }
            if (!wename) {
                alert('请填写微信号');
                btn.removeClass('weui_btn_disabled');
                return;
            }
            if (!openid) {
                alert('出现错误！请联系管理员');
                btn.removeClass('weui_btn_disabled');
                return;
            }
            var data = {
                username: username,
                classid: classid,
                wename: wename,
                openid: openid
            };

            $.ajax({
                url: '/?c=User&a=registerStudent',
                type: 'post',
                dataType: 'json',
                data: data,
                success: function (resp) {
                    if (resp.status !== 0) {
                        alert(resp.msg);
                        btn.removeClass('weui_btn_disabled');
                        return;
                    }
                    location.href="/?c=User&a=bindSuccess";
                },
                error: function () {
                    btn.removeClass('weui_btn_disabled');
                    alert('服务器错误，请重试');
                }
            });
        }
    },

    init: function () {
        this.bindUI();
    }
};

_pri.init();