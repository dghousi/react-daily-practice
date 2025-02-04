import { Fragment } from "react"


function Item({items}) {

    return (
        <>
        {
            items.map((item, i) => {
                return (
                    <Fragment key={item}>
                        <li>{item}</li>
                        <li>Test</li>
                    </Fragment>
                )
            })
        }
        </>
    )
}

export default Item