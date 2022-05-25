import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import DemoNavbar from 'components/navbars/DemoNavbar';

const SelfEventReflector = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar />
            {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Self-Event Reflector" Pdescription="Use the Self-Event Reflector to understand and explore how your self-perceptions reflect your perceptions of an event that you are experiencing. By using the Self-Event Reflector to understand how these perceptions clearly and specifically relate to each other, you can actively influence an outcome rather than just passively observing it."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="CODE GOES HERE" descriptions="Self-Event Reflector App Code"/>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default SelfEventReflector;