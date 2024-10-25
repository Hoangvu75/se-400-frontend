import { AppLogo } from '@react-monorepo/asset-lib';
import * as Styles from './styles';
import { CommonButton, InputField, LinkText } from '@react-monorepo/components';

const LoginPage = () => {
  return (
    <div style={Styles.pageStyle}>
      <div style={Styles.formContainer}>
        <div style={Styles.loginForm}>
          <h2 style={Styles.formTitle}>Chào mừng bạn đã quay trở lại</h2>
          <p style={Styles.subText}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
          </p>

          <form>
            <div style={Styles.inputContainer}>
              <label style={Styles.inputLabel}>Email</label>
              <InputField type="email" placeholder="Email" />
            </div>

            <div style={Styles.inputContainer}>
              <label style={Styles.inputLabel}>Password</label>
              <InputField type="password" placeholder="Mật khẩu" />
              <LinkText href="#" style={Styles.forgotPassword}>Quên mật khẩu</LinkText>
            </div>

            <CommonButton style={Styles.loginButton} type="submit">Đăng nhập</CommonButton>

            <div>
              <p style={Styles.loginTitle}>Hoặc đăng nhập bằng</p>
              <button type="button" style={Styles.googleButton}>Google</button>
              <button type="button" style={Styles.facebookButton}>Facebook</button>
              <button type="button" style={Styles.linkedinButton}>LinkedIn</button>
            </div>

            <p style={Styles.termsText}>
              Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và đồng ý với
              <LinkText href="#"> Điều khoản</LinkText> dịch vụ và 
              <LinkText href="#"> Chính sách bảo mật</LinkText> của chúng tôi.
            </p>

            <p style={Styles.signUpText}>
              Bạn chưa có tài khoản? <LinkText href="/register">Đăng ký ngay</LinkText>
            </p>
          </form>
        </div>
      </div>
      <div style={Styles.appSlogan}>
        <div>
          <img src={AppLogo} alt="App Logo" style={Styles.appLogo} />
          <h1 style={Styles.appSloganTitle}>Ứng dụng tìm việc làm hàng đầu</h1>
          <p style={Styles.appSloganSubtitle}>Đăng nhập ngay để tìm kiếm công việc mơ ước</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
