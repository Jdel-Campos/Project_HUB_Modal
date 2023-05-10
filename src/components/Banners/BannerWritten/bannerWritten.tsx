import React from "react"
import { Link } from 'react-router-dom';
import { StyledBannerWritten } from "./bannerWrittenStyled"

export const BannerWritten = () => {
    return(
        <StyledBannerWritten>
            <h4> Sing up and <span> GET 20% OFF </span> for yor first order. </h4>
            <Link to='/'> Sing up now </Link>
        </StyledBannerWritten>
    );
};