import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        const commentMap = comments.map((comment) => {
            var d = new Date(comment.date)
            var options = {month: "short", day: "numeric", year: "numeric"}
            return (
                <div key={comments.id} className="col-12 border-0 m-0">
                    <li className="list-group-item border-0 m-1 p-1">"{comment.comment}"</li>
                    <li className="list-group-item border-0 m-1 p-1">--{comment.author}, {d.toLocaleDateString("en-US", options)}</li>
                </div>
            );
        });
        if (comments != null)
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-group list-group-flush">
                        {commentMap}
                    </ul>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        if (this.props.selectedDish != null)
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail