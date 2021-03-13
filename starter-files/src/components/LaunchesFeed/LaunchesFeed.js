import React from 'react';
// components
import LaunchArticle from '../../components/LaunchArticle';

const LaunchesFeed = ({ launches }) =>
    launches.map(launch => (
        <LaunchArticle
            key={launch.id}
            name={launch.mission_name}
            link={launch.links.article_link}
            imgUrl={launch.links.flickr_images[0]}
            description={launch.launch_site.site_name_long}
        />
    ));

export default LaunchesFeed;
