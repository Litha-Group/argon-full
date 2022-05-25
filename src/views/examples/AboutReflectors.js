import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import DemoNavbar from 'components/navbars/DemoNavbar';
const AboutReflectors = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar />
            {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Reflectors" Pdescription="Human Reflectors enable you to engage with the various aspects of your perceptions and perspectives and understand how they reflect each other in a particular situation. Whereas psychometric profiling loses valuable information as it attempts to reduce psychological complexity, Human Reflectors display complex networks of contextual behaviours. Using Human Reflectors requires the completion of a Human Identifier or Human Illuminator describing a particular situation."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Choose Reflector" descriptions="Choose the Human Reflector that you would like to use to understand the various aspects of your perceptions and perspectives. This will give you the opportunity to Identify and explore potential tensions and consider how to resolve them in the most appropriate manner for you."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_3.png" iImg="icon02.png" ftitle="Choose Situation" descriptions="From your previous Human Identifier or Human Illuminator reports, choose two reports on the situation that you would like to reflect on, such as a Self Identifier and a Place Illuminator. You can also choose Human Identifier or Human Illuminator reports from different situations so that you can reflect on how the various aspects of those situations relate to each other."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_2.png" iImg="icon3.png" ftitle="Explore Aspects" 
                        descriptions="After choosing the situation or situations that you would like to reflect on, an aspect grid will be generated for you. The psychospatial aspects displayed on the grid will enable you to identify understand the congruences and incongruences in the perceptions you are generating and the perspectives that you are forming about the situation you are reflecting on."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Create Report" 
                        descriptions="You can then create your Human Reflector report, which will display how your perceptions and perspectives are reflecting each other for this particular situation or comparison of situations. The nature of the aspects described in your report will help you to identify opportunities to resolve tensions and realise your deeper and wider potential."/>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default AboutReflectors;