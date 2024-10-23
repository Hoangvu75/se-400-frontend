import './style.scss';
import JobBackground from '../assets/job-background.jpg';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Chào mừng bạn đã quay trở lại</h2>
          <p className="sub-text">Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>

          <form>
            <div className="input-container">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-container">
              <label>Password</label>
              <input type="password" placeholder="Mật khẩu" />
              <a href="#" className="forgot-password">Quên mật khẩu</a>
            </div>

            <button type="submit" className="login-button">Đăng nhập</button>

            <div className="social-login">
              <p>Hoặc đăng nhập bằng</p>
              <button type="button" className="google-button">Google</button>
              <button type="button" className="facebook-button">Facebook</button>
              <button type="button" className="linkedin-button">LinkedIn</button>
            </div>

            <p className="terms-text">
              Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và đồng ý với
              <a href="#"> Điều khoản</a> dịch vụ và <a href="#">Chính sách bảo mật</a> của chúng tôi.
            </p>

            <p className="sign-up">
              Bạn chưa có tài khoản? <a href="#">Đăng ký ngay</a>
            </p>
          </form>
        </div>
      </div>
      <img src={JobBackground} className="background-image" />
    </div>
  );
};

export default LoginPage;
