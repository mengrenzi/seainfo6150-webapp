import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx'
import './ArticleListItem.module.css'

const ArticleListItem = props => (
    <section>
        <h2>{props.article.title}</h2>
        <p>{props.article.shortText}</p>
        <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
        {<SlugButton article = {props.article}/>}
    </section>
);


ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;
