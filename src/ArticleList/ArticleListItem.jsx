import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton.jsx'
import ArticleImage from './ArticleImage'
import './ArticleListItem.module.css'

const ArticleListItem = props => (
    <div>
        <div>
            {<ArticleImage article = {props.article}/>}
        </div>
        <section>
            <h2>{props.article.title}</h2>
            <p>{props.article.shortText}</p>
            <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
            {<SlugButton article = {props.article}/>}
        </section>
    </div>
);


ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;
