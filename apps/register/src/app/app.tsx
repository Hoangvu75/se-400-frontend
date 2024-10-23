import './style.scss';
import JobBackground from '../../../../libs/asset-lib/src/assets/job-background.jpg';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h2>Tạo tài khoản mới</h2>
          <p className="sub-text">Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>

          <form>
            <div className="input-container">
              <label>Tên</label>
              <input type="text" placeholder="Tên của bạn" />
            </div>

            <div className="input-container">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-container">
              <label>Password</label>
              <input type="password" placeholder="Mật khẩu" />
            </div>

            <div className="input-container">
              <label>Xác nhận mật khẩu</label>
              <input type="password" placeholder="Xác nhận mật khẩu" />
            </div>

            <button type="submit" className="register-button">Đăng ký</button>

            <div className="social-login">
              <p>Hoặc đăng ký bằng</p>
              <button type="button" className="google-button">Google</button>
              <button type="button" className="facebook-button">Facebook</button>
              <button type="button" className="linkedin-button">LinkedIn</button>
            </div>

            <p className="terms-text">
              Bằng việc đăng ký, tôi đã đọc và đồng ý với
              <a href="#"> Điều khoản</a> dịch vụ và <a href="#">Chính sách bảo mật</a> của chúng tôi.
            </p>

            <p className="sign-up">
              Đã có tài khoản? <a href="#">Đăng nhập</a>
            </p>
          </form>
        </div>
      </div>
      <img src={JobBackground} className="background-image" />
    </div>
  );
};

export default RegisterPage;
