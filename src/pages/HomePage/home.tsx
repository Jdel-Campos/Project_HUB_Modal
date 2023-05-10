import React from "react"
import { Header } from "../../components/Header/header"
import { BannerImage } from "../../components/Banners/BannerImage/BannerImage"
import { BrandList } from "../../components/Brands/brandsList"
import { NavigatorMenuImage } from "../../components/NavigatorMenu/NavigationImage/navigationImage"
import { SectionProducts } from "../../components/SectionsProducts/sectionProducts"
import { Footer } from "../../components/Footer/footer"
import { Information } from "../../components/Information/information"
import { ModalProviders } from "../../providers/ModalProviders/modalContext"

export const HomePage = () => {
    
    return(
        <>
            <ModalProviders>
                <Header />
            </ModalProviders>
            <BannerImage />
            <BrandList />
            <NavigatorMenuImage />
            <Information />

            <SectionProducts title={ "New in store" } />
            <BannerImage />
            <SectionProducts title={ "The best deals" } />
            
            <SectionProducts title={ "Featured product" } />
            <Footer />
        </>
    )
}