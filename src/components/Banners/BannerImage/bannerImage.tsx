import React from "react";
import { StyledBannerImage } from "./bannerImageStiyled";
import Image__Banner from "../../../assets/Image__Banner__.svg"

export const BannerImage = () => {
    return(
        <StyledBannerImage>
            <figure>
                <img src={Image__Banner} alt="Banner" />
            </figure>
        </StyledBannerImage>
    );
};