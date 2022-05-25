import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import DemoNavbar from 'components/navbars/DemoNavbar';
const AboutConnectors = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar />
            {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Connectors" Pdescription="Human Connectors enable you to understand and explore the collective dynamics of a group. Rather than using outdated forms of team role profiling or network analysis, Human Connectors use our unique psychospatial approach to identify and understand the nature and quality of personal relationships in a group.  Using Human Connectors requires that each individual in a group has completed a Human Identifier or Human Illuminator describing a particular situation."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon01.png" ftitle="Choose Connector" descriptions="Choose the Human Connector that you would like to use to understand the dynamics of a particular group in a particular situation. If you would like to identify and explore the overall dynamics of a group and how they connect in a particular context, then use the Group Connector.. To understand specific group dynamics, such as Producing or Developing, then use the specific Human Connector of your choice."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Choose Group" descriptions="Choose the group that you would like to connect. A minimum of two people are required to be classed as a group and individuals can be members of multiple teams. As individuals can choose whether to share their Human Identifier and Human Illuminator reports or keep them private, individuals must share their reports with the group to be included in the Human Connector."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon3.png" ftitle="Choose Members" 
                        descriptions="After choosing the group that you would like to connect, the next step is to choose the members from that group that you would like to be included in the Human Connector. You can choose all the members of the group to be included or just include specific group members to understand how they influence the group dynamics."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_5.png" iImg="icon_04.png" ftitle="View Dynamics" 
                        descriptions="Then view the behavioural dynamics of your chosen group in the particular situation that you have chosen to connect. As you do so, you will be able to see how members of the group are naturally engaging with the situation and also how they relate to each other in your chosen situation."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_4.png" iImg="icon_05.png" ftitle="Create Report" 
                        descriptions="As you create your Human Connector report, you can also add or remove members from the group that you are connecting to understand how that influences group dynamics and engagement. Choosing different Human Connectors also lets you  identify the best approaches for letting the natural talents of your chosen group shine through."/>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default AboutConnectors;