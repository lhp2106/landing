<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="robots" content="noindex"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"/>
    <title>VinPlay Cổng game đổi thưởng</title>
    <meta name="description"
          content="game bai doi thuong, game đổi thưởng game đổi thẻ, game đánh bài đổi thưởng, chơi game đổi thưởng"/>
    <meta name="keywords"
          content="VinPlay - Vua chơi game đánh bài đổi thưởng tiền thật, đổi thẻ online trực tuyến uy tín nhanh chóng. Đa dạng game: tiến lên miền nam, xóc đĩa, sâm, mậu binh, tài xỉu, bầu cua, ba cây."/>
    <link rel="stylesheet" type="text/css" href="css/landing.css?ver=1"/>
    <style>
        div.grils {
            width: 218px;
            position: absolute;
            top:-7px;
        }


    </style>

</head>
<body>

<div class="container">
    <div class="page">
        <div class="main">
            <div class="login_page">
                <div class="logo_content">
                    <a href="http://vinplay.com">
                        <div class="logo"></div>
                    </a>
                </div>
                <div class="text_content">
                    <img src="images/text.png">
                </div>
            </div>
            <div class="content">
                <div class="login_top">
                    <div class="login_top_left">
                        <div class="tabgame"></div>
                    </div>
                    <div class="login_top_right">
                        <div class="form_login">
                            <div class="login">
                                <div class="error" id="error"></div>
                                <div class="register">
                                    <ul>
                                        <li>
                                            <div class="item"><input type="text" id="username" class="icon_user"
                                                                     size="100"
                                                                     onblur="if(this.value=='') this.value='Tên tài khoản'"
                                                                     onfocus="if(this.value=='Tên tài khoản') this.value=''"
                                                                     placeholder="Tên tài khoản"></div>
                                        </li>
                                        <li>
                                            <div class="item"><input type="password" id="password" class="icon_pass"
                                                                     size="100"
                                                                     onblur="if(this.value=='') this.value='Nhập mật khẩu'"
                                                                     onfocus="if(this.value=='Nhập mật khẩu') this.value=''"
                                                                     placeholder="Nhập mật khẩu"></div>
                                        </li>
                                        <li>
                                            <div class="item"><input type="password" id="confirmpass" class="icon_pass"
                                                                     size="100"
                                                                     onblur="if(this.value=='') this.value='Nhập lại mật khẩu'"
                                                                     onfocus="if(this.value=='Nhập lại mật khẩu') this.value=''"
                                                                     placeholder="Nhập lại mật khẩu"></div>
                                        </li>
                                        <li>
                                            <div class="item"><input type="text" class="capcha" maxlength="3" size="50"
                                                                     onblur="if(this.value=='') this.value='Mã xác nhận'"
                                                                     onfocus="if(this.value=='Mã xác nhận') this.value=''"
                                                                     id="txtcapcha" placeholder="Mã xác nhận"></div>
                                            <img id="capcha" class="capcha_img"> <a id="refesh" href="#"
                                                                                    class="refesh"></a>
                                        </li>
                                    </ul>

                                </div>

                                <div class="login_bot">
                                    <ul>
                                        <li><input type="button" class="btn_reg" value="" id="btn_reg"></li>
                                        <li><a href="#" id="face" class="btn_face"></a></li>
                                        <li><a href="#" id="google" class="btn_google"></a></li>
                                    </ul>
                                    <input type="hidden" id="idcapcha">
                                    <input type="hidden" id="utmcampain">
                                    <input type="hidden" id="utmsource">
                                    <input type="hidden" id="utmmedium">

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="content_footer">
                    <div class="content_center">
                        <div class="social">
                            <ul>
                                <li >
                                    <a href="vinplay.com" class="login_fot" target="_blank"></a>
                                </li>
                                <li >
                                    <a href="https://www.facebook.com/Gamebaivinplay/" class="facebook"
                                       target="_blank"></a>
                                </li>
                                <li >
                                    <a href="https://plus.google.com/110464907733726622727" class="google"
                                       target="_blank"></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/vinplay24h" class="twitter" target="_blank"></a>
                                </li>
                                <li>
                                    <a href="#" class="hotline" target="_blank"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="content_right">

                    </div>
                </div>


            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/md5.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>
</body>
</html>