import React from 'react'
import Header from '../components/Header'
import aboutUs from '../pages/aboutUs'
import Footer from '../components/Footer'


const AboutUs = ({children, title = 'Calnews'}) => {
  return (
    <>
      <div className="w-4/6 rounded overflow-hidden shadow-lg justify-evenly mx-auto py-25">
          <div className="px-10 py-10 ">
              <div className="font-bold text-xl mb-2 text-green-700">KALBE AT A GLANCE</div>
              <p className="text-gray-700 text-justify ">
              Established in 1966, Kalbe has gone a long way from a humble operation that started in a garage to become the leading pharmaceutical company in Indonesia. 
              <br></br>
              <br></br>  
              Growing both organically and through mergers & acquisitions, Kalbe expands its business interests and transformed itself to become a provider of an integrated healthcare solution through its 4 business divisions: the Prescription Pharmaceutical Division (23% contribution), Consumer Health Division (17% contribution), Nutritionals Division (30% contribution) and Distribution and Logistics Division (30% contribution). These business divisions manage an extensive portfolio of prescription pharmaceuticals and OTC drugs, energy drink and nutrition products, as well as a robust distribution arm serving over one million outlets across Indonesia’s vast archipelago. 
              <br></br> 
              <br></br> 
              In the international market, the Company has established its footprint in ASEAN countries, Nigeria, and South Africa, positioning Kalbe as a national pharmaceutical company with a competitive edge in the export market.
              <br></br> 
              <br></br> 
              Since its founding, the Company has been aware of the importance of innovation to grow its business. Kalbe Farma has established a robust research and development activities in leading edge generic drug formulation and continuous development of innovative consumer and nutritional products. Through strategic alliances with international partners, Kalbe have also started to support several successful research and development venture working on cancer drugs, stem cells and biotechnology research.
              <br></br> 
              <br></br> 
              With more than 17,000 employees, today Kalbe Farma is the largest healthcare provider in Indonesia, with unrivaled marketing, branding, distribution, financial strength and research and development expertise. Kalbe Farma is also the largest publicly-listed pharmaceutical company in Southeast Asia, commanding a market capitalization of Rp71 trillion and sales turnover Rp21 trillion by end of 2018.                
              </p>
          </div>
      </div>
      </>
    );
}

export default AboutUs