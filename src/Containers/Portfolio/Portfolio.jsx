import React from 'react'
import Header from '../../Components/PageHeaderContent/Header';
import { BsInfoCircleFill } from 'react-icons/bs';

const Portfolio = () => {
  return (
    <section className="portfolio">
    <Header headerText="My Portfolio" icon={<BsInfoCircleFill size={40}/>} />
  </section>
  )
}

export default Portfolio
