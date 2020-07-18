import React from "react";
import { connect } from 'react-redux';
import { Header } from "./header";
import { Content } from "./content";

const NewsList = ({ news }) => <div>
    <table>
        <Header />
        <Content news={news} />
    </table>
    {console.log(news)}

</div>

const mapStateToProps = (state, props) => {
    const page = (props && props.match.params.page) | 0;
    return {
        news: state.newsList.newsList[page]
    }
}

export const News = connect(mapStateToProps)(NewsList);
