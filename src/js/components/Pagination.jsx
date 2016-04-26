/* Mole React Component represents the Mole in  it's Peeking, Hidden, Whacked, or Recovery state */
import React from 'react';
import consts from '../lib/constants';

let Pagination = React.createClass({
    getList(page){
        let pageArr = [];

        if(page > 1) {
            pageArr.push("Previous");
        }

        for(let p = this.props.page; p <= this.props.page + 5 && p <= this.props.pages; p++) {
             pageArr.push(p);
        }

        if(page < this.props.pages) {
            pageArr.push("Next");
        }

        return pageArr;
    },
    render() {
        let l = this.getList(this.props.page);
        return (
            <ul className="pagination">
                {
                    l.map((pageNbr)=>{
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