import { AppLogo } from '@react-monorepo/asset-lib';
import * as Styles from './styles';
import { CommonButton, InputField, LinkText } from '@react-monorepo/components';

const RegisterPage = () => {
  return (
    <div style={Styles.pageStyle}>
      <div style={Styles.formContainer}>
        <div style={Styles.loginForm}>
          <h2 style={Styles.formTitle}>Chào mừng bạn đến với Job Seekers</h2>
          <p style={Styles.formSubTitle}>Hãy tạo một tài khoản để bắt đầu xây dựng sự nghiệp của bạn</p>

          <form>
            <div style={Styles.inputContainer}>
              <label style={Styles.inputLabel}>Họ và tên</label>
              <InputField placeholder="Họ và tên" />
            </div>

            <div style={Styles.inputContainer}>
              <label style={Styles.inputLabel}>Email</label>
              <InputField type="email" placeholder="Email" />
            </div>

            <div style={Styles.inputContainer}>
              <label style={Styles.inputLabel}>Mật khẩu</label>
              <InputField type="password" placeholder="Mật khẩu" />
            </div>

            <div style={Styles.inputContainer}>
              <label style={Styles.inputLabel}>Xác nhận mật khẩu</label>
              <InputField type="password" placeholder="Xác nhận mật khẩu" />
            </div>

            <CommonButton style={Styles.registerButton} type="submit">Đăng ký</CommonButton>

            <p style={Styles.termsText}>
              Bằng việc đăng ký tài khoản, tôi đã đọc và đồng ý với
              <LinkText href="#"> Điều khoản dịch vụ</LinkText> và <LinkText href="#">Chính sách bảo mật</LinkText> của chúng tôi.
            </p>

            <p style={Styles.signUpText}>
              Bạn đã có tài khoản? <LinkText href="/login">Đăng nhập</LinkText>
            </p>
          </form>
        </div>
      </div>
      <div style={Styles.appSlogan}>
        <div>
          <img style={Styles.appLogo} src={AppLogo} alt="App Logo" />
          <h1 style={Styles.appSloganTitle}>Ứng dụng tìm việc làm hàng đầu</h1>
          <p style={Styles.appSloganSubtitle}>Tạo tài khoản để bắt đầu tìm kiếm công việc mơ ước của bạn</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
