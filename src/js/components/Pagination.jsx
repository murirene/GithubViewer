import React from 'react';
import consts from '../lib/constants';

let Pagination = React.createClass({
    getPagination(page){
        let links = [];

        if(page > 1) {
            links.push("Previous");
        }

        for(let p = this.props.page; p <= this.props.page + 5 && p <= this.props.pages; p++) {
            links.push(p);
        }

        if(page < this.props.pages) {
            links.push("Next");
        }

        return links;
    },
    render() {
        let pagination = this.getPagination(this.props.page);
        return (
            <ul className="pagination">
                {
                    pagination.map((pageNbr)=>{
                        if( pageNbr === "Previous"){
                            return <li onClick={e => this.props.onClick(e.target.getAttribute('data-page'))} key={`PAGE_${pageNbr}`}>
                                <a data-page={this.props.page - 1} href="#">{pageNbr}</a>
                            </li>
                        } else if(pageNbr === "Next") {
                            return <li onClick={e => this.props.onClick(e.target.getAttribute('data-page'))} key={`PAGE_${pageNbr}`}>
                                <a data-page={this.props.page + 1} href="#">{pageNbr}</a>
                            </li>
                        } else {
                            return (
                                <li onClick={e => this.props.onClick(e.target.getAttribute('data-page'))}
                                    className={`${pageNbr === this.props.page? "active" : ""}`} key={`PAGE_${pageNbr}`}>
                                    <a data-page={pageNbr} href="#">{pageNbr}</a>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        )
    }
})

export default Pagination