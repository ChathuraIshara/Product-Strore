import { Fragment } from "react";
import React from "react";
function Item({item,key})
{
    return <React.Fragment>
        <tbody>
        <tr>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
        </tr>

        </tbody>
        

    </React.Fragment>
}

export default Item;