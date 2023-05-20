import React from "react";
import MenuLink from "./MenuLink";

type Props = {};

const Menu = (props: Props) => {
    return (
        <>
            <MenuLink href="mi2km" title="Da Miglia a Chilometri" from="Miglia" to="Chilometri" />
            <MenuLink href="km2mi" title="Da Chilometri a Miglia" from="Chilometri" to="Miglia" />
            <MenuLink href="text2ascii" title="Da Testo ad ASCII" from="Testo" to="ASCII" />
            <MenuLink href="ascii2text" title="Da ASCII a testo" from="ASCII" to="Testo" />
            <MenuLink href="urlencode" title="URL Encoder" from="URL" to="Encode" />
            <MenuLink href="urldecode" title="URL Decoder" from="URL" to="Decode" />
            <MenuLink href="btoa" title="Base64 Encoder" from="Base64" to="Encode" />
            <MenuLink href="atob" title="Base64 Decoder" from="Base64" to="Decode" />
        </>
    );
};

export default Menu;
