import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import DemoNavbar from 'components/navbars/DemoNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const VoiceIdentifier = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar type="primary" />
            {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Voice Identifier" Pdescription="Use the Voice Identifier to identify and understand your inner dialogue in a particular situation. As you describe and question your inner dialogue by using the Voice Identifier, you will naturally resolve any internal conflicts and uncertainties that you may be experiencing."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="CODE GOES HERE" descriptions="Voice Identifier App Code"/>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default VoiceIdentifier;