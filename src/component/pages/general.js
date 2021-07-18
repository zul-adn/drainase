import React from 'react';
import './../style/general.css';
import Map from './../pages/map';
import { connect } from "react-redux";
import { isMobile, isTablet } from "react-device-detect";
import NumberFormat from 'react-number-format';
import { login } from './../../store/app/action';

import HeroImg from './../assets/img/hero-img.png';

function General({ sumDatas, login }) {


    const toLogin = () => {
        login()
        // var modal = document.querySelector('#')
    }

    return (
        <>
            <header id="header" className="fixed-top header-scrolled">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo"><a href="index.html">SIGANAS</a></h1>

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
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                        </svg>
                                        <i className="bx bxl-dribbble"></i>
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
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                        </svg>
                                        <i className="bi-alarm"></i>
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
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                                        </svg>
                                        <i className="bx bx-tachometer"></i>
                                    </div>
                                    <h4><a href="">Magni Dolores</a></h4>
                                    <p>Total Panjang Sungai Kota Singkawang</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box iconbox-yellow">
                                    <div className="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                                        </svg>
                                        <i className="bx bx-layer"></i>
                                    </div>
                                    <h4><a href="">Nemo Enim</a></h4>
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

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Techie</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="copyright-wrap d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                            <div className="copyright">
                                &copy; Copyright <strong><span>Techie</span></strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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

