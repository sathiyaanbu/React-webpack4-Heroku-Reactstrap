import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import Navbari from './Navbari.css';
import tw from '../images/tw.png';
import fb from '../images/fb.png';
import Rg from '../images/Rg.png';
import snow from '../images/snow.jpg';
import land from '../images/land.jpg';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <Nav tabs style={{ paddingTop: '20px' }}>
          <NavItem>
            <NavLink
              style={{ fontSize: '20px' }}
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <b> Home</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ fontSize: '20px' }}
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <b>Publications</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ fontSize: '20px' }}
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              <b> CV</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ fontSize: '20px' }}
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4');
              }}
            >
              <b>Contact</b>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col>
                <img
                  src={land}
                  style={{ paddingTop: '20px', width: '100%' }}
                  className="img-fluid"
                  alt="Responsive"
                />
              </Col>
            </Row>
            <Row style={{ padding: '40px 10px 0px 0px' }}>
              <Col sm="12">
                I am a microbial ecologist with a specific interests in soil,
                plant and microbes interactions. My experience lies in
                culture-dependent as well as next generation (amplicon)
                sequencing methods to study the factors driving soil and
                plant-associated bacterial and fungal communities in different
                ecosystems. I would like to get an opportunity to learn modern
                techniques such as metagenomics and metatranscriptomics. My
                current interests are to find a ways to harness the microbiome
                for the eco-friendly agriculture.
                <br />
                <br />
                <br />
                <br />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row style={{ padding: '20px 10px 0px 0px' }}>
              <Col sm="12">
                <h4 style={{ paddingBottom: '10px' }}>
                  List of publications (most recent first)
                </h4>
                <span>
                  <ol style={{ paddingLeft: '20px' }}>
                    <li>
                      <b>Anbu Poosakkannu, </b> Riitta Nissinen, Minna-Maarit
                      Kytöviita. 2017. Native arbuscular mycorrhizal symbiosis
                      changes leaf bacterial community composition. Mycorrhiza;
                      27(8): 801-810. (Impact factor: 3.047; Citations: 0).
                    </li>
                    <br />
                    <li>
                      Dinesh Sanka Loganathachetti, <b>Anbu Poosakkannu*, </b>
                      Sundararaman Muthuraman*. 2017. Fungal community
                      assemblage of different soil compartments in mangrove
                      ecosystem. Scientific reports; DOI:
                      10.1038/s41598-017-09281-3. (*Co-corresponding authors;
                      Impact factor: 4.259; Citations: 0).
                    </li>
                    <br />
                    <li>
                      <b> Anbu Poosakkannu,</b> Riitta Nissinen, Minna Männistö,
                      Minna-Maarit Kytöviita. 2017. Microbial community
                      composition but not diversity changes along succession in
                      arctic sand dunes. Environmental microbiology. 19(2):
                      698–709. (Impact factor: 5.395; Citations: 2).
                    </li>
                    <br />
                    <li>
                      Dinesh Sanka Loganathachetti, Sundararaman Muthuraman,
                      <b> Anbu Poosakkannu</b>, Balamurugan Sadaiyappan. 2016.
                      Pyrosequencing based seasonal observation of prokaryotic
                      diversity in pneumatophore associated soil of Avicennia
                      marina. Current microbiology. 72(1):68-74. (Impact factor:
                      1.322; Citations: 7).
                    </li>
                    <br />
                    <li>
                      <b>Anbu Poosakkannu,</b> Riitta Nissinen, Minna-Maarit
                      Kytöviita. 2015. Culturable endophytic microbial
                      communities in the circumpolar grass, Deschampsia flexuosa
                      in a sub-Arctic inland primary succession are habitat and
                      growth stage specific. Environmental Microbiology Reports.
                      7(1):111-22. (Impact factor: 3.363; Citations: 9).
                    </li>
                    <br />
                    <li>
                      <b>Anbu Poosakkannu</b> and Arul Loganathan. 2013. Beta
                      glucuronidase activity in early stages of rice seedlings
                      and callus - A comparison with Escherichia coli beta
                      glucuronidase expressed in the transgenic rice.
                      International Journal for Biotechnology and Molecular
                      Biology Research. 4(4):52-59. (Impact factor: 0;
                      Citations: 1).
                    </li>
                  </ol>
                </span>
                <h4 style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Manuscripts
                </h4>
                <span>
                  <ol style={{ paddingLeft: '20px' }}>
                    <li>
                      Dinesh Sanka Loganathachetti, <b>Anbu Poosakkannu, </b>
                      Sundararaman Muthuraman. Bacterial diversity and community
                      structure analysis of rhizosphere-pneumatophore-bulk
                      marine sediment of Avicennia marina. Submitted.
                    </li>
                    <br />
                    <li>
                      <b>Anbu Poosakkannu</b> and Minna-Maarit Kytöviita.
                      Endosphere microbial legacy after plant transplantation in
                      arctic sand dunes. Submitted.
                    </li>
                  </ol>
                </span>
                <h4 style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Presentations /Posters
                </h4>
                <span>
                  <ol style={{ paddingLeft: '20px' }}>
                    <li>
                      <b> Anbu Poosakkannu,</b> Riitta Nissinen, Minna-Maarit
                      Kytöviita. (2016), A grass associated microbial diversity
                      and structure across the two successional stages of arctic
                      inland dunes. Oral presentation in annual conference 2016
                      of the Association for General and Applied Microbiology
                      (VAAM) in Jena, Germany.
                    </li>
                    <br />
                    <li>
                      <b>Anbu Poosakkannu</b>, Riitta Nissinen, Minna-Maarit
                      Kytöviita. (2015), Plant associated bacterial communities
                      in two different successional stages of sub-Arctic sand
                      dune ecosystem. Poster presentation in 13th Symposium on
                      Bacterial Genetics and Ecology (BAGECO) held at Milan,
                      Italy.
                    </li>
                    <br />
                    <li>
                      <b>Anbu Poosakkannu,</b> Ian Baldwin, Sagar Pandit (2011),
                      Manduca sexta carboxyl esterase and its role in
                      detoxification of chlorogenic acid. Poster presentation in
                      IMPRS symposium held at Dornberg, Jena, Germany. (Second
                      best poster award).
                    </li>
                    <br />
                    <li>
                      Govindraj Mohanraj, Ashokkumar Kaliyaperumal,
                      <b> Anbu Poosakkannu (2008),</b> Aerobic Rice Breeding- A
                      new tool for water scarcity management. Oral presentation
                      in International symposium on Water harvesting: bringing
                      green revolution to rainfed areas held at TNAU,
                      Coimbatore, India.
                    </li>
                    <br />
                    <br />
                  </ol>
                </span>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4 style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Education
                </h4>
                Doctor of Philosophy in Ecology and evolutionary biology (2017)
                at University of Jyväskylä, Finland.
                <br />
                Master of Science in Biotechnology (2008) at Tamil Nadu
                Agricultural University, Coimbatore, India.
                <br />
                Bachelor of Science in Agriculture (2006) at Tamil Nadu
                Agricultural University, Coimbatore, India.
                <h4 style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Latest research work
                </h4>
                Post-doctoral researcher (March 2017 to October 2017),
                University of Jyväskylä, Finland.
                <br />
                Microbes alter successional pathways.
                <h4 style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Previous research work
                </h4>
                Doctoral researcher (November 2012 to February 2017), University
                of Jyväskylä, Finland.
                <br />
                Endosphere microbial community assemblage of an inland sand dune
                colonizing plant.
                <br />
                <br />
                DAAD researcher (October 2010 to February 2012), MPICE, Jena,
                Germany.
                <br />
                Revealing <i>Manduca sexta</i> response to
                <i> Nicotiana attenuata </i>
                allelochemcials by Plant mediated RNAi approach.
                <br />
                <br />
                Research fellow (August 2009 to February 2010) IARI, New Delhi,
                India.
                <br />
                Impact assessment of Bt cotton on soil microbial structure and
                function.
                <br />
                <br />
                Research fellow (April 2009 to July 2009), University of Delhi,
                New Delhi, India.
                <br />
                A genomics and proteomic approach to identify, characterize,
                clone and over-express Seabuckthorn antifreeze proteins (AFP)
                for crop improvement and food industry.
                <br />
                <br />
                Master student (2006 to 2008), TNAU, Coimbatore, India.
                <br />
                Histochemical characterization of rice endogenous
                β-glucuronidase and cloning the orthologous gene from
                <i> Bradyrhizobium japonicum.</i>
                <br />
                <br />
                Bachelor student (2002 to 2006),TNAU, Coimbatore, India.
                <br />
                Isolation and Purification of soil microbes from Coastal soils
                of Trichendur, Tamil Nadu.
                <h4 style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Scholarships /Grants obtained
                </h4>
                <span>
                  <ol style={{ paddingLeft: '20px' }}>
                    <li>
                      Finnish cultural foundation (Personal grant: May
                      2016-October 2016).
                    </li>
                    <li>
                      Travel grant from Department of Biological and
                      Environmental Science, University of Jyväskylä to attend
                      and present (oral) at annual conference (March) 2016 of
                      the Association for General and Applied Microbiology
                      (VAAM) held at Jena, Germany.
                    </li>
                    <li>
                      The Ella and Georg Ehrnrooth Foundation (Project funding:
                      June 2015).
                    </li>
                    <li>
                      Travel grant from Department of Biological and
                      Environmental Science, University of Jyväskylä to attend
                      and present a poster in 13th Symposium on Bacterial
                      Genetics and Ecology (June 2015) held at Milan, Italy.
                    </li>
                    <li>
                      Oskar Öflunds Stiftelse (Personal grant: August 2014 to
                      October 2014).
                    </li>
                    <li>
                      EU-COST- FA1103 action grant for a Training School
                      (October 2014) - “Experimental Design and Statistical Data
                      Analysis: Applications in R-software for endophyte-related
                      data“ in Evora, Portugal.
                    </li>
                    <li>CIMO fellowship (January 2014 to July 2014).</li>
                    <li>DAAD fellowship (June 2010 to February 2012).</li>
                    <br />
                    <br />
                  </ol>
                </span>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row style={{ paddingTop: '20px' }}>
              <Col sm="4">
                <Card body style={{ backgroundColor: '#f8f9fa' }}>
                  <img
                    src={snow}
                    style={{ height: '205px', width: '400px' }}
                    className="img-fluid"
                    alt="Responsive"
                  />
                </Card>
              </Col>
              <Col sm="5">
                <Card body>
                  <CardTitle>Contact</CardTitle>
                  <CardText>
                    anbupoosakkannu@gmail.com <br />anbuarun12345@gmail.com
                    <br />
                    <br />
                    Kivihaantie 8 B 15 <br />00310 Helsinki
                    <br />
                    <br />
                    +358465571462
                  </CardText>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardText>
                    <a href="https://www.facebook.com/anbu.poosakkannu">
                      <img
                        src={fb}
                        style={{
                          height: '25px',
                          width: '30px',
                          paddingRight: '5px'
                        }}
                        className="img-fluid"
                        alt="Responsive"
                      />
                    </a>
                    <a href="https://twitter.com/AnbuPoosakkannu">
                      <img
                        src={tw}
                        style={{
                          height: '25px',
                          width: '30px',
                          paddingRight: '5px'
                        }}
                        className="img-fluid"
                        alt="Responsive"
                      />
                    </a>
                    <a href="https://www.researchgate.net/profile/Anbu_Poosakkannu2">
                      <img
                        src={Rg}
                        style={{
                          height: '25px',
                          width: '30px',
                          paddingRight: '5px'
                        }}
                        className="img-fluid"
                        alt="Responsive"
                      />
                    </a>
                  </CardText>
                </Card>
                <br />
                <br />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
