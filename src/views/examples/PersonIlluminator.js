import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import DemoNavbar from 'components/navbars/DemoNavbar';

const PersonIlluminator = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar></DemoNavbar>
            {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Person Illuminator" Pdescription="Use the Person Illuminator to illuminate and explore the story you are telling yourself about the behaviours of a specific person in a particular situation. As you describe and question the story you are telling yourself about that person by using the Person Illuminator, you will naturally become more aware of their story and how it relates to your own story."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="CODE GOES HERE" descriptions="Person Illuminator App Code"/>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default PersonIlluminator;