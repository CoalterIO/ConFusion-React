import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

// class DishDetail extends Component {

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    // const commentMap = comments.map((comment) => {
    //     var d = new Date(comment.date)
    //     var options = { month: "short", day: "numeric", year: "numeric" }
    //     return (
    //         <div key={comments.id} className="col-12 border-0 m-0">
    //             <li className="list-group-item border-0 m-1 p-1">"{comment.comment}"</li>
    //             <li className="list-group-item border-0 m-1 p-1">--{comment.author}, {d.toLocaleDateString("en-US", options)}</li>
    //         </div>
    //     );
    // });
    // if (comments != null)
    //     return (
    //         <div>
    //             <h4>Comments</h4>
    //             <ul className="list-group list-group-flush">
    //                 {commentMap}
    //             </ul>
    //         </div>
    //     );
    // else
    //     return (
    //         <div></div>
    //     );

    var options = { month: "short", day: "numeric", year: "numeric" }
    if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p> -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", options)}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    else
        return (
            <div></div>
        );
}

const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default DishDetail