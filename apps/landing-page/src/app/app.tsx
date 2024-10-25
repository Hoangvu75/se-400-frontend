import './style.scss';
import React from 'react';
import { LandingBg, FindJob, Company, Recruitment, ContactUs } from '@react-monorepo/asset-lib';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">JOB SEEKERS</div>
        <nav>
          <ul>
            <li>
              <a href="#home">Tìm việc làm</a>
              <ul className="dropdown">
                <li><a href="#job1">Toàn thời gian</a></li>
                <li><a href="#job2">Bán thời gian</a></li>
                <li><a href="#job3">Việc làm từ xa</a></li>
              </ul>
            </li>
            <li>
              <a href="#companies">Các công ty</a>
              <ul className="dropdown">
                <li><a href="#company1">Doanh nghiệp trong nước</a></li>
                <li><a href="#company2">Doanh nghiệp nước ngoài</a></li>
              </ul>
            </li>
            <li>
              <a href="#post-job">Đăng tin tuyển dụng</a>
            </li>
          </ul>
        </nav>
        <div>
          <a href="/register"><button className="sign-up-btn">Đăng ký</button></a>
          <a href="/login"><button className="sign-in-btn">Đăng nhập</button></a>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Tìm kiếm những công việc phù hợp xung quanh bạn</h1>
          <p>Chúng tôi cung cấp những công việc phù hợp với nhu cầu của bạn. Hãy cùng chúng tôi tìm kiếm công việc mơ ước.</p>
          <button className="get-started-btn">Bắt đầu ngay</button>
        </div>
        <div className="hero-image">
          <img src={LandingBg} alt="Landing page background" />
        </div>
      </section>

      <section className="services-section">
        <h2>Dịch vụ của chúng tôi</h2>
        <div className="services">
          <div className="service">
            <img src={FindJob} alt="Service 1" />
            <h3>Tìm việc làm</h3>
            <p>Chúng tôi cung cấp những công việc phù hợp với nhu cầu của bạn</p>
          </div>
          <div className="service">
            <img src={Company} alt="Service 2" />
            <h3>Các công ty</h3>
            <p>Chúng tôi cung cấp thông tin về các công ty đang tuyển dụng</p>
          </div>
          <div className="service">
            <img src={Recruitment} alt="Service 3" />
            <h3>Đăng tin tuyển dụng</h3>
            <p>Cung cấp dịch vụ đăng tin tuyển dụng miễn phí</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434507108!2d144.95373631531504!3d-37.81720997975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11ea91%3A0xbcdf5d9c1bfa06bc!2sYour+Business+Location!5e0!3m2!1sen!2sus!4v1600451882030!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
          <div className="contact-form-container">
            <h2>Liên hệ với chúng tôi</h2>
            <form className="contact-form">
              <input type="text" placeholder="Họ và tên" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Tin nhắn" rows={10} required></textarea>
              <button type="submit">Gửi</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2023 JOB SEEKERS. Tất cả quyền được bảo lưu.</p>
        <p><a href="#privacy-policy">Chính sách bảo mật</a> | <a href="#terms-of-service">Điều khoản dịch vụ</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
