import React from 'react';
import './../style/general.css';
import Map from './../pages/map';
import { connect } from "react-redux";
import { isMobile, isTablet } from "react-device-detect";
import NumberFormat from 'react-number-format';
import { login } from './../../store/app/action';

import HeroImg from './../assets/img/hero-img.png';
import RiverLogo from './../assets/img/river.svg';
import ForestLogo from './../assets/img/forest.svg';
import WaterFallLogo from './../assets/img/waterfall.svg';
import IslandLogo from './../assets/img/island.svg';

function General({ sumDatas, login }) {


    const toLogin = () => {
        login()
        document.querySelector('.modal-backdrop').style.display = "none"

    }

    return (
        <>
            <header id="header" className="fixed-top header-scrolled">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo"><a href="index.html">SIGEONAS</a></h1>

                    <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#rekapitulasi">Rekapitulasi</a></li>
                            <li><a className="nav-link scrollto" href="#pemetaan">Pemetaan</a></li>
                            <li><a className="getstarted scrollto" href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Masuk</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>

            <section id="hero" className="d-flex align-items-center">

                <div className="container-fluid" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Sistem Informasi Geografis Drainase dan Sungai</h1>
                            <h2>Dinas Pekerjaan Umum dan Perataan Ruang Kota Singkawang</h2>

                        </div>
                        <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                            <img src={HeroImg} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">

                <section id="rekapitulasi" className="services section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Rekapitulasi</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box iconbox-blue">
                                    <div className="icon">
                                        <img src={RiverLogo} />
                                    </div>
                                    <h4><a href="">
                                        {sumDatas.length !== 0 ?
                                            <NumberFormat
                                                value={sumDatas.total[0].total}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                renderText={formattedValue => <>{formattedValue} m</>}
                                            />
                                            : "Loading..."}
                                    </a></h4>
                                    <p>Total Panjang Jaringan Drainase Kota Singkawang</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box iconbox-orange ">
                                    <div className="icon">
                                        <img src={ForestLogo} />
                                    </div>
                                    <h4><a href="">
                                        {sumDatas.length !== 0 ?
                                            <NumberFormat
                                                value={sumDatas.all.length}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                renderText={formattedValue => <>{formattedValue} </>}
                                            />
                                            : "Loading..."}
                                    </a></h4>
                                    <p>Total Jumlah Jaringan Drainase Kota Singkawang</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box iconbox-pink">
                                    <div className="icon">
                                    <div className="icon">
                                        <img src={WaterFallLogo} />
                                    </div>
                                    </div>
                                    <h4><a href=""> {sumDatas.length !== 0 ?
                                        <NumberFormat
                                            value="30123"
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            renderText={formattedValue => <>{formattedValue} m</>}
                                        />
                                        : "Loading..."}</a></h4>
                                    <p>Total Panjang Sungai Kota Singkawang</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box iconbox-yellow">
                                    <div className="icon">
                                    <div className="icon">
                                        <img src={IslandLogo} />
                                    </div>
                                    </div>
                                    <h4><a href="">4</a></h4>
                                    <p>Total Jumlah Sungai Kota Singkawang</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>

                <section id="pemetaan" className="services">
                    <div className="container">
                        <div className="section-title">
                            <h2>Pemetaan</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="map">
                            <Map />
                        </div>

                    </div>
                </section>
            </main>

            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-6 footer-contact">
                                <h3>SIGEONAS</h3>
                                <p>
                                    Sistem Informasi Geografis Drainase dan Sungai <br /><br />

                                </p>
                            </div>



                            <div className="col-lg-6 col-md-6 footer-newsletter">
                                <h4>Dinas Pekerjaan Umum dan Penataan Ruang Kota SIngkawang</h4>
                                <p>
                                    Jalan Ahmad Yani <br />
                                    Kota Singkawang<br />
                                    Kalimantan Barat <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="copyright-wrap d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                            <div className="copyright">
                                &copy; Copyright <strong><span>Dinas PUPR Singkawang</span></strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by <a href="https://dinartech.com/">BootstrapMade & Dinar Tech Mediatama</a>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </footer>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login Dinas PUPR</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={toLogin} className="btn btn-primary">Masuk</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        sumDatas: app.sumDatas,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(General);

