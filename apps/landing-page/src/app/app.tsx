import React from 'react';
import { LandingBg, FindJob, Company, Recruitment, AppLogo } from '@react-monorepo/asset-lib';
import * as Styles from './styles';
import { CommonButton, InputField, LinkText, NavDropdownItems, NavItem } from '@react-monorepo/components';
import SignInButton from './components/sign-in-button';
import SignUpButton from './components/sign-up-button';
import GetStartedButton from './components/get-started-button';
import { heroImageImgStyle } from './styles';
import { TextAreaField } from '../../../../libs/components/src/lib/text-area-field';

const LandingPage: React.FC = () => {
  return (
    <div style={Styles.landingPageStyle}>
      <header style={Styles.headerStyle}>
        <div style={Styles.navLogoStyle}>
          <img src={AppLogo} alt="App logo" style={Styles.imageLogoStyle} />
          <div style={Styles.logoStyle}>JOB SEEKERS</div>
        </div>
        <nav>
          <ul style={Styles.navUlStyle}>
            <NavDropdownItems
              title="Tìm việc làm"
              items={[
                { href: '#job1', label: 'Toàn thời gian' },
                { href: '#job2', label: 'Bán thời gian' },
                { href: '#job3', label: 'Việc làm từ xa' },
              ]}
            />
            <NavDropdownItems
              title="Các công ty"
              items={[
                { href: '#company1', label: 'Doanh nghiệp trong nước' },
                { href: '#company2', label: 'Doanh nghiệp nước ngoài' },
              ]}
            />
            <NavItem href="#recruitment">Đăng tin tuyển dụng</NavItem>
          </ul>
        </nav>
        <div>
          <a href="/register">
            <SignUpButton />
          </a>
          <a href="/login">
            <SignInButton />
          </a>
        </div>
      </header>

      <section style={Styles.heroSectionStyle}>
        <div style={Styles.heroContentStyle}>
          <h1 style={Styles.heroContentH1Style}>
            Tìm kiếm những công việc phù hợp xung quanh bạn
          </h1>
          <p style={Styles.heroContentPStyle}>
            Chúng tôi cung cấp những công việc phù hợp với nhu cầu của bạn. Hãy
            cùng chúng tôi tìm kiếm công việc mơ ước.
          </p>
          <GetStartedButton />
        </div>
        <div style={Styles.heroImageStyle}>
          <img
            src={LandingBg}
            alt="Landing page background"
            style={heroImageImgStyle}
          />
        </div>
      </section>

      <section style={Styles.servicesSectionStyle}>
        <h2>Dịch vụ của chúng tôi</h2>
        <div style={Styles.servicesStyle}>
          <div style={Styles.serviceStyle}>
            <img src={FindJob} alt="Service 1" style={Styles.serviceImgStyle} />
            <h3>Tìm việc làm</h3>
            <p>
              Chúng tôi cung cấp những công việc phù hợp với nhu cầu của bạn
            </p>
          </div>
          <div style={Styles.serviceStyle}>
            <img src={Company} alt="Service 2" style={Styles.serviceImgStyle} />
            <h3>Các công ty</h3>
            <p>Chúng tôi cung cấp thông tin về các công ty đang tuyển dụng</p>
          </div>
          <div style={Styles.serviceStyle}>
            <img
              src={Recruitment}
              alt="Service 3"
              style={Styles.serviceImgStyle}
            />
            <h3>Đăng tin tuyển dụng</h3>
            <p>Cung cấp dịch vụ đăng tin tuyển dụng miễn phí</p>
          </div>
        </div>
      </section>

      <section style={Styles.contactSectionStyle}>
        <div style={Styles.contactContainerStyle}>
          <div style={Styles.mapContainerStyle}>
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
          <div style={Styles.contactFormContainerStyle}>
            <h2 style={Styles.contactH2Style}>Liên hệ với chúng tôi</h2>
            <form>
              <InputField
                style={Styles.formItemStyle}
                type={'text'}
                placeholder={'Họ và tên'}
                isRequired={true}
              />
              <InputField
                style={Styles.formItemStyle}
                type={'email'}
                placeholder={'Email'}
                isRequired={true}
              />
              <TextAreaField
                style={Styles.formItemStyle}
                placeholder={'Tin nhắn'}
                isRequired={true}
                rows={10}
              />
              <CommonButton style={Styles.formItemStyle} type={'submit'}>
                Gửi
              </CommonButton>
            </form>
          </div>
        </div>
      </section>

      <footer style={Styles.footerStyle}>
        <p>© 2023 JOB SEEKERS.</p>
        <p>
          <LinkText href="#privacy-policy" style={Styles.linkTextStyle}>
            Chính sách bảo mật
          </LinkText>
          <LinkText href="#terms-of-services" style={Styles.linkTextStyle}>
            Điều khoản dịch vụ
          </LinkText>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
