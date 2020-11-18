import React from "react";
// import Articles from "../components/Article";
import axios from "axios";
import { Card } from "antd";

// import Card from "antd";

class ArticleDetail extends React.Component {
    state = {
        article: {},
    };

    componentDidMount() {
        //query the article id parameter
        const articleID = this.props.match.params.articleID;

        axios.get(`http://192.168.1.8:8000/api/${articleID}`).then((res) => {
            this.setState({
                article: res.data,
            });
            console.log(res.data);
        });
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        );
    }
}

export default ArticleDetail;
