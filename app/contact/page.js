import { contact } from "@/getData/getData";
import Footer2 from "../components/common/Footer2";
import SubscribeNow from "../components/common/SubscribeNow";
import SplitText2 from "../components/common/Split_text2";
import Link from "next/link";
import Img from "../components/common/Img";

export default async function Contact() {
  const data = await contact();
  return (
    <div>
      {/* main area start  */}
      <main className="position-relative">
        {/* page header section start  */}
        <section className="page-header">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-6">
                <div className=" position-relative ">
                  <SplitText2 cls="page-sub-title text-uppercase" line1={data.subtitle} />
                  <Img className="position-absolute page-header-shape contact-page-header-shape"
                    src="assets/img/images/page-header-shape.svg" alt="page-header-shape" />
                </div>
              </div>
              <div className="col-lg-6">
                <p className="short-info contact-short-info">{data.content}</p>
              </div>
            </div>
            <h1 className="page-title text-uppercase position-absolute z-n1">{data.title}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* contact info section start  */}
        <div className="contact-info-section">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-6 align-self-end">
                <div className="common-social-icon d-flex">
                  {data.socal_icon && data.socal_icon.map((item,index)=>(
                    <Link key={index} className="d-flex justify-content-center align-items-center" href={item.link}>
                      <Img src={item.img} alt="contact-icon" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info">
                  <ul className="list-unstyled">
                    {data.contactinfo && data.contactinfo.map((item,index)=>(
                      <li key={index}><Link href={item.contactlink}><span>{item.icon}</span> {item.contact}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact info section end  */}
        {/* contact form section start  */}
        <section className="contact-form-section">
          <div className="gmap overflow-hidden position-relative">
            <iframe
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            <div className="container px-0">
              <div className="form-main position-absolute bottom-0 z-1 w-100">
                <h4 className="form-title">{data.formtitle}</h4>
                <form action="assets/mail.php" method="POST" id="contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input name="firstName" required type="text" className="form-control rounded-0 px-0"
                          placeholder="Your first name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input name="lastName" required type="text" className="form-control rounded-0 px-0"
                          placeholder="Your last name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input name="email" required type="email" className="form-control rounded-0 px-0"
                          placeholder="Your email address*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input name="number" required type="text" className="form-control rounded-0 px-0"
                          placeholder="Your phone number*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-group">
                        <textarea name="message" required placeholder="Your Message"
                          className="form-control form-textarea rounded-0 px-0"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn position-relative">{data.btn} <span
                        className="d-flex justify-content-center align-items-center position-absolute top-0">
                        <Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></span>
                      </button>
                    </div>
                  </div>
                </form>
                <p className="ajax-response mb-0"></p>
              </div>
            </div>
          </div>
        </section>
        {/* contact form section end  */}
      </main>
      {/* main area end  */}
      <SubscribeNow/>
      <Footer2/>
    </div>
  )
}
