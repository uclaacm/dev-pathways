import React from "react";
import ReactPlayer from "react-player";
import './ResourceItem.css'

import external_source from '../../img/external_source.svg'
import article_icon from '../../img/article_icon.svg'
import doc_icon from '../../img/doc_icon.svg'
import game_icon from '../../img/game_icon.svg'


const ResourceItem = (props) => {
    let { link } = props;
    let links = [{l: link.article, i: article_icon}, 
                {l: link.documentation, i: doc_icon},
                {l: link.game, i: game_icon}].filter(item => item.l);
    if(!links[0]) links = [{l: "https://acm.cs.ucla.edu/404", i: external_source}];

    const displayThumbnail = () => {
        return (
            link.video ?
                <a href={link.video}
                    title={"Watch " + link.video}
                    class="click-area">
                    <ReactPlayer 
                        url={link.video} 
                        width={160} height={90}
                        light={true} 
                    />
                </a>
            :
                <a href={links[0].l}
                    title={"Visit " + links[0].l}
                    class="click-area">
                    <div class="extern-icon">
                        <img src={external_source} class="link_icon" width="20" height="20" alt= ""/>
                        <img class="ex_svg" src={links[0].i} width="50" height="50" alt=""/>
                    </div>
                </a>
        )
    }

    const displayLinks = () => {
        return (
            links.slice(!link.video).map((item) => {
                return (
                    <a href={item.l} title={"Visit" + item.l}>
                        <img src={item.i} width="30" height="30" alt="" />
                    </a>
                )
            })
        )
    }

    return (
        <div class="item-container">
            <table class="center">
                <tr><th colspan="2">{link.name}</th></tr>
                <tr>
                    <td>{displayLinks()}</td>
                    <td>{displayThumbnail()}</td>
                </tr>
            </table>
        </div>
    )
}

export default ResourceItem;
