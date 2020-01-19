import React from "react";

import config from '../../config';
import { PageInfo } from '../../utils/types';

import "./index.scss";


export type PageAction = "before" | "after" |'';

const pageAction = {
  before:'last',
  after:'first'
}

export const setPagination = (action:PageAction, cursor:string) => action !== ""?
  `
  ${pageAction[action]}:${config.pageSize}
  ${action}:"${cursor}"
  `:`first:${config.pageSize}`;

  
interface PaginationProps {
    pageInfo: PageInfo
    getPaginationAction: Function
}

const Pagination = (props: PaginationProps) => {

    const { pageInfo, getPaginationAction } = props;

    const handleActionPage = (action: string,cursor: string) => {
        getPaginationAction(action,cursor);
    }

    return (
        <>
          {(pageInfo.hasPreviousPage || pageInfo.hasNextPage)?(
              <>
                <div className="pageInfo">
                  {pageInfo.hasPreviousPage?(<div className="page-pre" onClick={()=>{handleActionPage("before", pageInfo.startCursor)}}>上一页</div>):""}
                  {pageInfo.hasNextPage?(<div className="page-next" onClick={()=>{handleActionPage("after", pageInfo.endCursor)}}>下一页</div>):""}
                </div>
              </>
          ):""}
        </>
    )
}

export default Pagination;
