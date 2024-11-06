import React from 'react';
import { LandingBg, FindJob, Company, Recruitment } from '@react-monorepo/asset-lib';
import * as Styles from './styles';
import { CommonButton, Footer, InputField, LinkText, NavBar } from '@react-monorepo/components';
import GetStartedButton from './components/get-started-button';
import { heroImageImgStyle } from './styles';
import { TextAreaField } from '../../../../libs/components/src/lib/text-area-field';

const LandingPage: React.FC = () => {
  return (
    <div style={Styles.landingPageStyle}>
      <NavBar />

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

      <Footer />
    </div>
  );
};

export default LandingPage;
