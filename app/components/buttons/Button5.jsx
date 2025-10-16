"use client"
import Link from "next/link";
import Img from "../common/Img";

function Button5(props) {
    return (
        <>
            <Link className="view-all-btn" href={`${props.location}`}>
                {props.name}
                <div className="icon"><Img src="/assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
            </Link>
        </>
    );
}

export default Button5;